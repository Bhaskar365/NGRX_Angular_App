import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from '../shared/store/Blog/Blog.model';
import { getblog } from '../shared/store/Blog/Blog.selectors';
import { AppstateModel } from '../shared/Global/appstate.model';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrl: './blog-component.component.css',

})
export class BlogComponentComponent implements OnInit {

  blogList!:BlogModel[];

  constructor(private store:Store<AppstateModel>) {}

  ngOnInit(): void {
    this.store.select(getblog).subscribe(item => {
      this.blogList = item;
      console.log(this.blogList);
    });
  }
}
