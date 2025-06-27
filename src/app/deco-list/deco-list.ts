import { Component } from '@angular/core';
import { Deco } from './Deco';
import { DecoCarrito } from '../deco-carrito';
import { DecoData } from '../deco-data';

@Component({
  selector: 'app-deco-list',
  standalone: false,
  templateUrl: './deco-list.html',
  styleUrl: './deco-list.scss'
})
export class DecoList {
  deco : Deco [] = [];

 constructor(
  private decoCarrito: DecoCarrito,
  private decoData : DecoData) { }

  ngOnInit(): void {
    this.decoData.getAll().subscribe(productos  => this.deco=productos);
   }

 agregarAlCarrito(item: Deco): void {
    this.decoCarrito.agregarAlCarrito(item);
    item.stock -=item.cantidad;
    item.cantidad=0;
  }


}

