import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Blog } from './blog';
import { BlogListComponent } from './blog-list.component';
import { BlogEditComponent } from './blog-edit.component';
import { BlogService } from './blog.service';


@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<h2>{{byline}}
	<div>{{option1}}</div>
	<div>{{option2}}</div>
	<div>{{option3}}</div>
	`,
	providers: [BlogService]
})
export class AppComponent implements OnInit {
	title = "The Treasured Tears Project";
	byline = "You have kept count of my wanderings and put my tears in your bottle. Are they not in your book? Psalm 56:8"
	option1 = "Resources";
	option2 = "Blog"
	group1 = "Survivors";
	group2 = "People Helpers";
	group3 = "Friends & Family"

	blogs: Blog[];

	constructor(private blogService: BlogService) { }

	getBlogs(): void {
    this.blogService.getBlogs().then(blogs => this.blogs = blogs);
  }

	ngOnInit(): void {
		this.getBlogs();
  }


	
}
