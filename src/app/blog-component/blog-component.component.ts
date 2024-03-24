import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from '../shared/store/Blog/Blog.model';
import { getblog } from '../shared/store/Blog/Blog.selectors';
import { AppstateModel } from '../shared/Global/appstate.model';
import { MatDialog } from '@angular/material/dialog';
import { AddblogComponent } from '../component/addblog/addblog.component';
import { deleteblog } from '../shared/store/Blog/Blog.actions';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrl: './blog-component.component.css',

})
export class BlogComponentComponent implements OnInit {

  blogList!:BlogModel[];

  constructor(private store:Store<AppstateModel>, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.store.select(getblog).subscribe(item => {
      this.blogList = item;
      console.log(this.blogList);
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
