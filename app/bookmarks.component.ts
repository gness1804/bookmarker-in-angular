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
  newBookmark: Bookmark;

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

  onAdd(): void {
    this.bookmarkService.addBookmark();
  }

}
