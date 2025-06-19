import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoTiendaDeco } from './deco-tienda-deco/deco-tienda-deco';
import { DecoAbout } from './deco-about/deco-about';

const routes: Routes = [
  { path: '',redirectTo: 'deco',pathMatch: 'full' },
 { path: 'deco', component: DecoTiendaDeco },
 { path: 'about', component: DecoAbout },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
