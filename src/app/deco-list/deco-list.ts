import { Component } from '@angular/core';
import { Deco } from './Deco';

@Component({
  selector: 'app-deco-list',
  standalone: false,
  templateUrl: './deco-list.html',
  styleUrl: './deco-list.scss'
})
export class DecoList {
  deco : Deco [] = [
    {
      nombre: "Almohadones",
      categoria: "Dormitorio",
      precio: 5000,
      stock: 0,
      imagen: "assets/img/almohadon.jpg",
      oferta: false, 
      cantidad:0,
    },
    {
      nombre: "Velas",
      categoria: "Living",
      precio: 2000,
      stock: 10,
      imagen: "assets/img/velas.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Cuadros",
      categoria: "Living",
      precio: 12000,
      stock: 3,
      imagen: "assets/img/cuadro.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Espejo redondo",
      categoria: "Baño",
      precio: 8500,
      stock: 4,
      imagen: "assets/img/espejo.jpg",
      oferta: true,
      cantidad:0,
    },
    {
      nombre: "Cortinas blancas",
      categoria: "Dormitorio",
      precio: 7000,
      stock: 6,
      imagen: "assets/img/cortinas.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Alfombra persa",
      categoria: "Living",
      precio: 25000,
      stock: 2,
      imagen: "assets/img/alfombra.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Lámpara colgante",
      categoria: "Comedor",
      precio: 18000,
      stock: 5,
      imagen: "assets/img/lampara.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Florero cerámico",
      categoria: "Living",
      precio: 3500,
      stock: 8,
      imagen: "assets/img/florero.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Maceta moderna",
      categoria: "Exterior",
      precio: 4000,
      stock: 10,
      imagen: "assets/img/maceta.jpg",
      oferta: true,
      cantidad:0,
    },
    {
      nombre: "Reloj de pared",
      categoria: "Cocina",
      precio: 6000,
      stock: 4,
      imagen: "assets/img/reloj.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Candelabro metálico",
      categoria: "Comedor",
      precio: 4500,
      stock: 7,
      imagen: "assets/img/candelabro.jpg",
      oferta: true,
      cantidad:0,
    },
    {
      nombre: "Perchero de pie",
      categoria: "Entrada",
      precio: 11000,
      stock: 3,
      imagen: "assets/img/perchero.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Cojines estampados",
      categoria: "Dormitorio",
      precio: 5200,
      stock: 6,
      imagen: "assets/img/cojines.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Centro de mesa rústico",
      categoria: "Comedor",
      precio: 8000,
      stock: 4,
      imagen: "assets/img/centro-mesa.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Jarrón transparente",
      categoria: "Living",
      precio: 3900,
      stock: 9,
      imagen: "assets/img/jarron.jpg",
      oferta: true,
      cantidad:0,
    },
    {
      nombre: "Luz de neón decorativa",
      categoria: "Juvenil",
      precio: 9500,
      stock: 2,
      imagen: "assets/img/neon.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Estantería flotante",
      categoria: "Estudio",
      precio: 12000,
      stock: 3,
      imagen: "assets/img/estanteria.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Tapiz bohemio",
      categoria: "Dormitorio",
      precio: 7800,
      stock: 5,
      imagen: "assets/img/tapiz.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Porta retratos múltiple",
      categoria: "Living",
      precio: 5600,
      stock: 7,
      imagen: "assets/img/portaretrato.jpg",
      oferta: false,
      cantidad:0,
    },
    {
      nombre: "Farol decorativo",
      categoria: "Exterior",
      precio: 6700,
      stock: 6,
      imagen: "assets/img/farol.jpg",
      oferta: true,
      cantidad:0,
    }
  ];

upQuantity (deco: Deco): void{
  if(deco.cantidad < deco.stock)
  deco.cantidad++;
}
downQuantity (deco: Deco): void{
  if(deco.cantidad>0)
  deco.cantidad--;
}

validateQuantity(item: any, event: Event): void {
  const input = event.target as HTMLInputElement;
  const value = Number(input.value);

  if (value > item.stock) {
    item.showStockError = true;
    item.cantidad = item.stock;
  } else {
    item.showStockError = false;
  }
}

}

