import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel, Blogs } from '../shared/store/Blog/Blog.model';
import { getblog, getbloginfo } from '../shared/store/Blog/Blog.selectors';
import { AppstateModel } from '../shared/Global/appstate.model';
import { MatDialog } from '@angular/material/dialog';
import { AddblogComponent } from '../component/addblog/addblog.component';
import { deleteblog, loadblog } from '../shared/store/Blog/Blog.actions';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrl: './blog-component.component.css',

})
export class BlogComponentComponent implements OnInit {

  blogList!:BlogModel[];
  blogInfo!:Blogs;

  constructor(private store:Store<AppstateModel>, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(loadblog())
    this.store.select(getbloginfo).subscribe(item => {
      //this.blogList = item;
      this.blogInfo = item;
      console.log(this.blogInfo);
    });
  }

  AddBlog() {
    this.OpenPopup(0,'Add blog');
  }

  OpenPopup(id:any, title:any, isEdit=false) {
    this.dialog.open(AddblogComponent,{
      width:'40%',
      data : {
        id:id,
        title:title,
        isEdit:isEdit
      }
    });
  }

  EditBlog(id:any) {
    this.OpenPopup(id, 'Edit Blog', true);
  }

  RemoveBlog(id:any) {
    if(confirm('Are you sure to remove this blog?')) {
      this.store.dispatch(deleteblog({id:id}));
    }
  }
}
