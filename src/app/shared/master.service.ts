import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogModel } from './store/Blog/Blog.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  haveAccess() {
    return true;
  }

  GetAllBlogs():Observable<BlogModel[]> {
      return this.http.get<BlogModel[]>('http://localhost:3000/Blogs')
  }

  CreateBlog(blogInput : BlogModel) {
      return this.http.post("http://localhost:3000/Blogs", blogInput).pipe(
        tap(()=>{
            this.http.get<BlogModel>("http://localhost:3000/Blogs?_limit=1&_sort=title&_order+desc");
        })
      )
  }

  UpdateBlog(bloginput:BlogModel) {
    return this.http.put("http://localhost:3000/Blogs/"+bloginput.id,bloginput);
  }

  DeleteBlog(blogId:number) {
    return this.http.delete("http://localhost:3000/Blogs/"+blogId);
  }

}
