import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewSeriesPageComponent } from './pages/new-series-page/new-series-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SeriePageComponent } from './pages/serie-page/serie-page.component';

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
        component: NewSeriesPageComponent

      },
      {
        path: ':id',
        component: SeriePageComponent
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
export class SeriesRoutingModule { }
