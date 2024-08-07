import { createReducer, on } from '@ngrx/store';
import { addblog, addblogsuccess, deleteblog, loadblog, loadblogfail, loadblogsuccess, updateblog } from "./Blog.actions";
import { BlogState } from "./Blog.state";
import { BlogModel } from './Blog.model';

const _blogReducer = createReducer(BlogState, 
    on(loadblog, (state) => {
        return {
            ...state
        };
    }),
    on(loadblogsuccess, (state,action)=> {
        return {
            ...state,
            bloglist:[...action.bloglist],
            ErrorMessage: ''
        }
    }),
    on(loadblogfail,(state,action)=>{
        console.log(action.Errortext)
        return {
            ...state,
            bloglist:[],
            ErrorMessage:action.Errortext.message
        }
    }),
    // on(addblog, (state,action)=> {
    //     const _blog = {...action.bloginput};
    //     _blog.id = state.bloglist.length + 1;
    //     return {
    //         ...state,
    //         bloglist:[...state.bloglist,_blog]
    //     }
    // }),
    on(addblogsuccess, (state,action)=> {
        const _blog = {...action.bloginput};
        return {
            ...state,
            bloglist:[...state.bloglist,_blog]
        }
    }),
    on(updateblog,(state,action)=> {
        const _blog = {...action.bloginput};
        const updatedblog = state.bloglist.map(blog => {
            return _blog.id === blog.id ? _blog : blog;
        })
        return {
            ...state,
            bloglist : updatedblog
        }
    }),
    on(deleteblog,(state,action)=> {
        const updatedblogToDelete = state.bloglist.filter((data:BlogModel)=>{
            return data.id !== action.id
        });
        return {
            ...state,
            bloglist: updatedblogToDelete   
        }
    })
)

export function blogReducer(state:any, action:any) {
    return _blogReducer(state,action);
}