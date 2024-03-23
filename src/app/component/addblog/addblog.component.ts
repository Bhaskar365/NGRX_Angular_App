import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BlogModel } from '../../shared/store/Blog/Blog.model';
import { Store } from '@ngrx/store';
import { AppstateModel } from '../../shared/Global/appstate.model';
import { addblog, updateblog } from '../../shared/store/Blog/Blog.actions';
import { getBlogById } from '../../shared/store/Blog/Blog.selectors';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent implements OnInit {

  pageTitle = '';
  editBlogId = 0;
  editData!:BlogModel 

  constructor( private dialogref:MatDialogRef<AddblogComponent>, 
               private builder:FormBuilder,
               private store:Store<AppstateModel>,
               @Inject(MAT_DIALOG_DATA) public data:any) {}

  ngOnInit(): void {

    this.pageTitle = this.data.title;
    if(this.data.isEdit) {
      this.editBlogId = this.data.id;
      this.store.select(getBlogById(this.editBlogId)).subscribe(_data=>{
          this.editData = _data;
          this.blogform.setValue(
            {
              id:this.editData.id, 
              title: this.editData.title, 
              description: this.editData.description
            });
      });
    }

  }

  closepopup() {
    this.dialogref.close();
  }

  blogform = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required) 
  });

  SaveBlogs() {
    if(this.blogform.valid) {
      const _bloginput: BlogModel = {
        id: 0,
        title: this.blogform.value.title as string,
        description: this.blogform.value.description as string
      }
      if(this.data.isEdit) {
        _bloginput.id = this.blogform.value.id as number;
        this.store.dispatch(updateblog({bloginput: _bloginput}));
      }
      else {
        this.store.dispatch(addblog({bloginput:_bloginput}));
      }
      this.closepopup();
    }
  }

}
