import { Component, Input } from '@angular/core';
import { Blog } from './blog';

@Component({
	selector: 'my-blog-list',
	template: `
		<div *ngfor="let blog of blogs">
  		<h2>{{blog.title}}</h2>
      <p>{{blog.summary}}</p>
      <p>{{blog.author}}</p>
  	</div>
  `
})
export class BlogListComponent {
	blog: Blog;
}