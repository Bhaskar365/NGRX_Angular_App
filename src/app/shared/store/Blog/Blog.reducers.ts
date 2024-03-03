import { createReducer, on } from '@ngrx/store';
import { addblog, loadblog } from "./Blog.actions";
import { BlogState } from "./Blog.state";

const _blogReducer = createReducer(BlogState, 
    on(loadblog, (state) => {
        return {
            ...state
        };
    }),
    on(addblog, (state,action)=>{
        const _blog = {...action.bloginput}
        return {
            ...state,
            bloglist:[...state.bloglist,_blog]
        }
    })
)

export function blogReducer(state:any, action:any) {
    return _blogReducer(state,action);
}