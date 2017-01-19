import { Injectable } from '@angular/core';

import { Bookmark } from './bookmark';
import { BOOKMARKS } from './bookmarks-data';

@Injectable()
export class BookmarkService {
  getBookmarks(): Promise<Bookmark[]> {
      return Promise.resolve(BOOKMARKS);
  };

  addBookmark(): void {
    BOOKMARKS.push({
      name: 'foo',
      url: 'foo.com',
      id: 600,
    });
  }

}
