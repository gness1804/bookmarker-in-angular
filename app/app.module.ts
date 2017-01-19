import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BookmarksComponent } from './bookmarks.component';
import { QuestionsComponent } from './questions.component';
import { QuestionDetailComponent } from './question-detail.component';
import { AddBookmarkComponent } from './add-bookmark.component';
import { AddQuestionComponent } from './add-question.component';
import { BookmarkService } from './bookmark.service';
import { QuestionService } from './question.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AddBookmarkComponent,
    AddQuestionComponent,
    AppComponent,
    BookmarksComponent,
    QuestionsComponent,
    QuestionDetailComponent
  ],
  providers: [
    BookmarkService ,
    QuestionService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
