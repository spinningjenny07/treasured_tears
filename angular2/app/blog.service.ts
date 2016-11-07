import { Injectable } from '@angular/core';

import { Blog } from './blog';
import { BLOGS } from './mock-blogs';

@Injectable()

export class BlogService {
	getBlogs(): Promise<Blog[]> {
  return Promise.resolve(BLOGS);
}
}