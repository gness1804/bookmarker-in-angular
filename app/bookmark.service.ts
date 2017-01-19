import { Injectable } from '@angular/core';

import { Bookmark } from './bookmark';
import { BOOKMARKS } from './bookmarks-data';

@Injectable()
export class BookmarkService {
  bookmark: Bookmark;
  getBookmarks(): Promise<Bookmark[]> {
      return Promise.resolve(BOOKMARKS);
  };

}
