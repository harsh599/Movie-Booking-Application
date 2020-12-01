import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'movies',
    loadChildren: () => import('src/app/app-adventure/app-adventure.module').then(m => m.AppAdventureModule),
  },
  {
    path:'**',
    redirectTo:'home/page-not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
