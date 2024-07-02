import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsRoutingModule } from './comics.routing.module';
import { ComicPageComponent } from './pages/comic-page/comic-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewComicComponent } from './pages/new-comic/new-comic.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { MaterialModule } from '../material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ComicPageComponent,
    MainPageComponent,
    ListPageComponent,
    NewComicComponent,
    CardListComponent,

  ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    MaterialModule,
    NgxPaginationModule,
    SharedModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComicsModule { }
