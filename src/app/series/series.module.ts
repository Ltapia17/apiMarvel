import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewSeriesPageComponent } from './pages/new-series-page/new-series-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SeriePageComponent } from './pages/serie-page/serie-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { SeriesRoutingModule } from './series.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SerieCardListComponent } from './components/serie-card-list/serie-card-list.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    MainPageComponent,
    NewSeriesPageComponent,
    ListPageComponent,
    SeriePageComponent,
    SerieCardListComponent

  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxPaginationModule,
    MaterialModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SeriesModule { }
