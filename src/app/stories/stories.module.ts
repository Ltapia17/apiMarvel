import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesRoutingModule } from './stories.routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewStorieComponent } from './pages/new-storie/new-storie.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { StoriePageComponent } from './pages/storie-page/storie-page.component';
import { StoriesCardComponent } from './components/stories-card/stories-card.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MainPageComponent,
    NewStorieComponent,
    ListPageComponent,
    StoriePageComponent,
    StoriesCardComponent
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    SharedModule,
    NgxPaginationModule,
    MaterialModule

  ]
})
export class StoriesModule { }
