import { Component } from '@angular/core';
import { Blog } from './blog';
import { BlogListComponent } from './blog-list.component';
import { BlogEditComponent } from './blog-edit.component';

const BLOGS: Blog[] = [{
		title: "Blog Post 1",
		author: "Me",
		date: new Date(),
		summary: "#1",
		content: "This is blog post #1!"
	}, {
		title: "Blog Post 2",
		author: "Me",
		date: new Date(),
		summary: "#2",
		content: "This is blog post #2!"
	}, {
		title: "Blog Post 3",
		author: "Me",
		date: new Date(),
		summary: "#3",
		content: "This is blog post #3!"
	}];

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<h2>{{byline}}
	<div>{{option1}}</div>
	<div>{{option2}}</div>
	<div>{{option3}}</div>
	`
})
export class AppComponent {
	title = "The Treasured Tears Project";
	byline = "You have kept count of my wanderings and put my tears in your bottle. Are they not in your book? Psalm 56:8"
	option1 = "Resources";
	option2 = "Blog"
	group1 = "Survivors";
	group2 = "People Helpers";
	group3 = "Friends & Family"
	blogs = BLOGS; 


	
}
