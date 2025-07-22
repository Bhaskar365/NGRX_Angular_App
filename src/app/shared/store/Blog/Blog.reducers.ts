import { createReducer, on } from '@ngrx/store';
import { addblog, addblogsuccess, deleteblog, loadblog, loadblogfail, loadblogsuccess, updateblog, updateblogsuccess } from "./Blog.actions";
import { BlogState } from "./Blog.state";
import { BlogModel } from './Blog.model';

const _blogReducer = createReducer(BlogState, 
    on(loadblog, (state) => {
        return {
            ...state,
             IsLoaded:false
        };
    }),
    on(loadblogsuccess, (state,action)=> {
        return {
            ...state,
            bloglist:[...action.bloglist],
            ErrorMessage: '',
            //IsLoaded:false
        }
    }),
    on(loadblogfail,(state,action)=> {
        console.log(action.Errortext)
        return {
            ...state,
            bloglist:[],
            ErrorMessage:action.Errortext.message,
            // IsLoaded:false
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
            bloglist:[...state.bloglist,_blog],
            // IsLoaded:false
        }
    }),
    on(updateblogsuccess,(state,action)=> {
        const _blog = {...action.bloginput};
        const updatedblog = state.bloglist.map(blog => {
            return _blog.id === blog.id ? _blog : blog;
        })
        return {
            ...state,
            bloglist : updatedblog,
            // IsLoaded:false
        }
    }),
    on(deleteblog,(state,action)=> {
        const updatedblogToDelete = state.bloglist.filter((data:BlogModel)=>{
            return data.id !== action.id
        });
        return {
            ...state,
            bloglist: updatedblogToDelete,
            // IsLoaded:false 
        }
    })
)

export function blogReducer(state:any, action:any) {
    return _blogReducer(state,action);
}

