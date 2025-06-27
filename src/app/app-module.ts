import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { DecoList } from './deco-list/deco-list';
import { CarritoCompras } from './carrito-compras/carrito-compras';
import { FormsModule } from '@angular/forms';
import { DecoAbout } from './deco-about/deco-about';
import { DecoTiendaDeco } from './deco-tienda-deco/deco-tienda-deco';
import { InputNumero } from './input/input-numero';
import { Home } from './home/home';
import { Contacto } from './contacto/contacto';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    DecoList,
    CarritoCompras,
    DecoAbout,
    DecoTiendaDeco,
    InputNumero,
    Home,
    Contacto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
