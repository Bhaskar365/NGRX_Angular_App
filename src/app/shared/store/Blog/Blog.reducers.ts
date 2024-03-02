import { createReducer, on } from '@ngrx/store';
import { loadblog } from "./Blog.actions";
import { BlogState } from "./Blog.state";


const _blogReducer = createReducer(BlogState, 
    on(loadblog, (state) => {
        return {
            ...state
        };
    })
)

export function blogReducer(state:any, action:any) {
    return _blogReducer(state,action);
}