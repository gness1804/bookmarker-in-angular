import { Injectable } from '@angular/core';

import { Bookmark } from './bookmark';
import { BOOKMARKS } from './bookmarks-data';

@Injectable()
export class BookmarkService {
  getBookmarks(): Promise<Bookmark[]> {
      return Promise.resolve(BOOKMARKS);
  };

  addBookmark(titleVal: string): void {
    BOOKMARKS.push({
      name: titleVal,
      url: 'foo.com',
      id: Date.now(),
    });
  }

}
