import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoTiendaDeco } from './deco-tienda-deco/deco-tienda-deco';
import { DecoAbout } from './deco-about/deco-about';
import { Home } from './home/home';
import { Contacto } from './contacto/contacto';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'tiendaDeco', component: DecoTiendaDeco },
  { path: 'about', component: DecoAbout },
  { path: 'contacto', component: Contacto }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
