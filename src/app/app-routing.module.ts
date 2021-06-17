import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [  
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
{ path: 'producto/:id', component: ProductoComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
