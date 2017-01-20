import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Bookmark } from './bookmark';
import { BookmarkService } from './bookmark.service';

@Component({
  moduleId: module.id,
  selector: 'bookmarks',
  templateUrl: 'bookmarks.component.html',
  styleUrls: [ 'bookmarks.component.css' ],
})

export class BookmarksComponent implements OnInit  {
  bookmarks: Bookmark[];
  selectedBookmark: Bookmark;
  titleVal = '';
  urlVal = '';

  onSelect(bookmark: Bookmark): void {
    this.selectedBookmark = bookmark;
  }

  constructor(
    private bookmarkService: BookmarkService
  ){}

  getBookmarks(): void {
    this.bookmarkService.getBookmarks().then(bookmarks => this.bookmarks = bookmarks)
  }

  ngOnInit(): void {
      this.getBookmarks();
  }

  onKeyTitle(value: string): void {
    this.titleVal = value;
  }

  onKeyURL(value: string): void {
    this.urlVal = value;
  }

  onAdd(): void {
    if (this.titleVal === '' || this.urlVal === '') {
        alert('Please enter in values for both the title and URL.')
        return null;
    }
    this.bookmarks.push(
      {
        name: this.titleVal,
        url: this.urlVal,
        id: Date.now(),
      }
    )
  }

  onDeleteBookmark(id: number): void {
    this.bookmarks = this.bookmarks.filter((bookmark) => {
      return bookmark.id !== id;
    })
    this.selectedBookmark = null;
  }

}
