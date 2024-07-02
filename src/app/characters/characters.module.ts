import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { NewCharacterPageComponent } from './pages/new-character-page/new-character-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './components/card-list/card-list.component';
import { MaterialModule } from '../material/material.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent,
    ListPageComponent,
    CharacterPageComponent,
    NewCharacterPageComponent,
    CardListComponent,


  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
    MaterialModule,
    NgxPaginationModule,
    SharedModule,
    FormsModule

  ]
})
export class CharactersModule { }
