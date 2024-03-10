import { BlogComponentComponent } from "../../blog-component/blog-component.component";
import { Blogs } from "../store/Blog/Blog.model";
import { CounterModel } from "../store/counter.model";

export interface AppstateModel {
    counter: CounterModel,
    blog: Blogs
}