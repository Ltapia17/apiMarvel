import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComicsModule } from './comics/comics.module';
import { StoriesModule } from './stories/stories.module';
import { SeriesModule } from './series/series.module';
import { AuthModule } from './auth/auth.module';
import { CharactersModule } from './characters/characters.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { ImagePathPipe } from './pipes/image-path.pipe';







@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    ComicsModule,
    StoriesModule,
    SeriesModule,
    AuthModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,


  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
