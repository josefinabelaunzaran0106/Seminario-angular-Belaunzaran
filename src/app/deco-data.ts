import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Deco } from './deco-list/Deco';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'https://685e84dd7b57aebd2af9bc68.mockapi.io/decoTienda/productos';

@Injectable({ providedIn: 'root' })
export class DecoData {
  private productos: Deco[] = [];
  private productos$ = new BehaviorSubject<Deco[]>([]);

  constructor(private http: HttpClient) {}

  getAll(): Observable<Deco[]> {
    if (this.productos.length > 0) {
      return this.productos$.asObservable(); // ya están cargados
    }

    this.http.get<Deco[]>(URL).pipe(
      tap((productos: Deco[]) => {
        productos.forEach(p => p.cantidad = 0);
        this.productos = productos;
        this.productos$.next(this.productos);
      })
    ).subscribe();

    return this.productos$.asObservable();
  }

  getProducto(nombre: string): Deco | undefined {
    return this.productos.find(p => p.nombre === nombre);
  }

  descontarStock(nombre: string, cantidad: number): boolean {
    const producto = this.getProducto(nombre);
    if (producto && producto.stock >= cantidad) {
      producto.stock -= cantidad;
      this.productos$.next(this.productos); // 🔁 Notificamos cambio
      return true;
    }
    return false;
  }

  devolverStock(nombre: string, cantidad: number): void {
    const producto = this.getProducto(nombre);
    if (producto) {
      producto.stock += cantidad;
      this.productos$.next(this.productos); // 🔁 Notificamos cambio
    }
  }
}
