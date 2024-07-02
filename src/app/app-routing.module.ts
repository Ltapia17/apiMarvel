import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './shared/pages/page404/page404.component';

const routes: Routes = [

  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then((m) => m.CharactersModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./series/series.module').then((m) => m.SeriesModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./comics/comics.module').then( (m) => m.ComicsModule)
  },
  {
    path:'storie',
    loadChildren: () => import('./stories/stories.module').then( (m) => m.StoriesModule),

  },
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: Page404Component
  },

  {
    path:'**',
    redirectTo: '404'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
