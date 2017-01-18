import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  styleUrls: [ 'app.component.css' ],
  template: `
  <h1>{{title}}</h1>
  <a routerLink="/bookmarks" routerLinkActive="active" >Bookmarks</a>
  <a routerLink="/questions" routerLinkActive="active" >Questions</a>
  <router-outlet></router-outlet>
  `,
})

export class AppComponent  {
  title = 'Bookmarker';
}
