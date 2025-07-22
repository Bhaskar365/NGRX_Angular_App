import { blogReducer } from "../store/Blog/Blog.reducers";
import { counterReducer } from "../store/counter.reducer";
import { AppReducer } from "./App.reducer";


export const AppState = {
    counter: counterReducer,
    blog: blogReducer,
    app:AppReducer
}