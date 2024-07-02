import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { StoriePageComponent } from './pages/storie-page/storie-page.component';
import { NewStorieComponent } from './pages/new-storie/new-storie.component';


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
        path: 'new-stories',
        component: NewStorieComponent

      },
      {
        path: ':id',
        component: StoriePageComponent
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
export class StoriesRoutingModule { }
