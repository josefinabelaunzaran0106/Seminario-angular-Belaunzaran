import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Deco } from './deco-list/Deco';

const URL= 'https://685e84dd7b57aebd2af9bc68.mockapi.io/decoTienda/productos';

@Injectable({
  providedIn: 'root'
})
export class DecoData {

  constructor( private http: HttpClient) { }
  getAll(): Observable <Deco[]>{ 
   return this.http.get <Deco[]>(URL)
          .pipe(
            tap ((productos: Deco[])=> productos.forEach (producto=> producto.cantidad=0))
          );
  }
}
