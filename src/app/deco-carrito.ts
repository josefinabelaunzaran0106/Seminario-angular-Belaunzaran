import { Injectable } from '@angular/core';
import { Deco } from './deco-list/Deco';
import { BehaviorSubject } from 'rxjs';
import { DecoData } from './deco-data';

@Injectable({
  providedIn: 'root'
})
export class DecoCarrito {
  private _lista: Deco[] = [];
  lista: BehaviorSubject<Deco[]> = new BehaviorSubject(this._lista);

  constructor(private decoData: DecoData) {}

  agregarAlCarrito(item: Deco): void {
    const cantidad = item.cantidad;
    const nombre = item.nombre;

    if (this.decoData.descontarStock(nombre, cantidad)) {
      const existente = this._lista.find(p => p.nombre === nombre);
      if (!existente) {
        this._lista.push({ ...item }); // copio la cantidad
      } else {
        existente.cantidad += cantidad;
      }

      this.lista.next([...this._lista]);
    } else {
      alert('No hay suficiente stock disponible');
    }
  }

  vaciarCarrito(): void {
    this._lista.forEach(item => {
      this.decoData.devolverStock(item.nombre, item.cantidad);
    });
    this._lista = [];
    this.lista.next([...this._lista]);
  }
}


