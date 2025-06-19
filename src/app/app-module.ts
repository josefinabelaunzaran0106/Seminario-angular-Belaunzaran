import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DecoList } from './deco-list/deco-list';
import { CarritoCompras } from './carrito-compras/carrito-compras';
import { FormsModule } from '@angular/forms';
import { DecoAbout } from './deco-about/deco-about';
import { DecoTiendaDeco } from './deco-tienda-deco/deco-tienda-deco';

@NgModule({
  declarations: [
    App,
    DecoList,
    CarritoCompras,
    DecoAbout,
    DecoTiendaDeco
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
