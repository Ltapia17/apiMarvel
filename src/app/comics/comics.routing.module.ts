import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewComicComponent } from './pages/new-comic/new-comic.component';
import { ComicPageComponent } from './pages/comic-page/comic-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path:'list',
        component: ListPageComponent
      },
      {
        path: 'new-series',
        component: NewComicComponent

      },
      {
        path: ':id',
        component: ComicPageComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
