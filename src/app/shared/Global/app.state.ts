import { blogReducer } from "../store/Blog/Blog.reducers";
import { counterReducer } from "../store/counter.reducer";


export const AppState = {
    counter: counterReducer,
    blog: blogReducer
}