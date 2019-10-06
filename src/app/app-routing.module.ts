import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'listproduk', loadChildren: './listproduk/listproduk.module#ListprodukPageModule' },
  { path: 'tambahproduk', loadChildren: './tambahproduk/tambahproduk.module#TambahprodukPageModule' },
  { path: 'keranjangbelanja', loadChildren: './keranjangbelanja/keranjangbelanja.module#KeranjangbelanjaPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}