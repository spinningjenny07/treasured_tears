import { Component, Input } from '@angular/core';
import { Blog } from './blog';

@Component({
	selector: 'my-blog-edit',
	template: `
	<div>
    <label>Title: </label>
    <input [(ngModel)]="blog.title" placeholder="title" />
  	</div>
	<div>
    <label>Author: </label>
    <input [(ngModel)]="blog.author" placeholder="author" />
  	</div>
  	<div>
    <label>Published: </label>
    <input [(ngModel)]="blog.date" placeholder="published" />
  	</div>
  	<div>
    <label>Tags: </label>
    <input [(ngModel)]="blog.tags" placeholder="tags" />
  	</div>
  	<div>
    <label>Summary: </label>
    <input [(ngModel)]="blog.summary" placeholder="summary" />
  	</div>
  	<div>
    <label>Content: </label>
    <input [(ngModel)]="blog.content" placeholder="content" />
  	</div>

	`,
})
export class BlogEditComponent {

}