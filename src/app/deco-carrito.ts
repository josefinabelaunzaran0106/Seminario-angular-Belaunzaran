import { Injectable } from '@angular/core';
import { Deco } from './deco-list/Deco';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecoCarrito {
  private _lista: Deco[] = [];

  lista: BehaviorSubject<Deco[]> = new BehaviorSubject(this._lista);

  constructor() {}

  agregarAlCarrito(item: Deco): void {
    const existente = this._lista.find(v => v.nombre === item.nombre);

    if (!existente) {
      this._lista.push({ ...item });
    } else {
      existente.cantidad += item.cantidad;
    }

    // Actualizamos el observable para notificar los cambios
    this.lista.next([...this._lista]);

    console.log('Carrito:', this._lista);
  }
  vaciarCarrito(): void {
  this._lista = [];
  this.lista.next([...this._lista]);
}

}


