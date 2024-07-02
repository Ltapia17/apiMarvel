import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { Page404Component } from './pages/page404/page404.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { ImagePathPipe } from '../pipes/image-path.pipe';


@NgModule({
  declarations: [
    NavBarComponent,
    Page404Component,
    SearchBoxComponent,
    ImagePathPipe

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,


  ],
  exports:[
    NavBarComponent,
    Page404Component,
    SearchBoxComponent,
    ImagePathPipe

  ]
})
export class SharedModule { }
