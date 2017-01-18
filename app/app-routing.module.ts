import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks.component';
import { QuestionsComponent } from './questions.component';
import { QuestionDetailComponent }  from './question-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/bookmarks', pathMatch: 'full' },
  { path: 'bookmarks',  component: BookmarksComponent},
  { path: 'questions',  component: QuestionsComponent},
  { path: 'detail/:id', component: QuestionDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
