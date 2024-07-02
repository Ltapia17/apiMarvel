import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { NewCharacterPageComponent } from './pages/new-character-page/new-character-page.component';

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
        path: 'new-character',
        component: NewCharacterPageComponent

      },
      {
        path: ':id',
        component: CharacterPageComponent
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
export class CharactersRoutingModule { }
