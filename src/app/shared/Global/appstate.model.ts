import { BlogComponentComponent } from "../../blog-component/blog-component.component";
import { CounterModel } from "../store/counter.model";

export interface AppstateModel {
    counter: CounterModel,
    blog: BlogComponentComponent[]
}