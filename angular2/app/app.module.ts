import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list.component'
import { BlogEditComponent } from './blog-edit.component'

@NgModule({
	imports: [ 
	BrowserModule,
	FormsModule ],

	declarations: [ AppComponent ],
	
	bootstrap: [ AppComponent ]
})
export class AppModule { }
