import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BookmarksComponent } from './bookmarks.component';
import { BookmarkService } from './bookmark.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BookmarksComponent
  ],
  providers: [ BookmarkService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
