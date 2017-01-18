import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BookmarksComponent } from './bookmarks.component';
import { QuestionsComponent } from './questions.component';
import { BookmarkService } from './bookmark.service';
import { QuestionService } from './question.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BookmarksComponent,
    QuestionsComponent
  ],
  providers: [
    BookmarkService ,
    QuestionService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
