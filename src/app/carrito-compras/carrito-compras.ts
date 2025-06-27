import { Component, OnInit, OnDestroy } from '@angular/core';
import { DecoCarrito } from '../deco-carrito';
import { Deco } from '../deco-list/Deco';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-carrito-compras',
  standalone: false,
  templateUrl: './carrito-compras.html',
  styleUrls: ['./carrito-compras.scss']
})
export class CarritoCompras implements OnInit, OnDestroy {

  lista: Deco[] = [];
  private subscription!: Subscription;

  constructor(private decoCarrito: DecoCarrito) {}

  ngOnInit(): void {
    this.subscription = this.decoCarrito.lista.subscribe(carrito => {
      this.lista = carrito;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  vaciarCarrito(): void {
  this.decoCarrito.vaciarCarrito();
}
get total(): number {
  return this.lista.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}
}
