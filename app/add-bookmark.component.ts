import { Component } from '@angular/core';

import { BookmarkService } from './bookmark.service';

@Component({
  moduleId: module.id,
  selector: 'add-bookmark',
  templateUrl: 'add-bookmark.component.html'
})

export class AddBookmarkComponent  {
  titleVal = '';
  urlVal = '';

  constructor(
    private bookmarkService: BookmarkService
  ){}

  onKeyTitle(value: string): void {
    this.titleVal = value;
  }

  onKeyURL(value: string): void {
    this.urlVal = value;
  }

  onAdd(): void {
    this.bookmarkService.addBookmark(this.titleVal, this.urlVal);
  }

}
