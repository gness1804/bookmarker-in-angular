import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BookmarksComponent } from './bookmarks.component';
import { BookmarkService } from './bookmark.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    BookmarksComponent
  ],
  providers: [ BookmarkService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
