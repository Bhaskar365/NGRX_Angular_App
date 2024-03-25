import { Injectable } from '@angular/core';
import { MasterService } from '../../master.service';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { LOAD_BLOG, loadblogfail, loadblogsuccess } from './Blog.actions';
import { EMPTY, catchError, exhaustMap, map,of,pipe } from 'rxjs';

@Injectable()

export class BlogEffects {

    constructor(private action$:Actions, private service:MasterService) {}

    _blog = createEffect(()=>
        this.action$.pipe(
            ofType(LOAD_BLOG),
            exhaustMap((action)=>{
                return this.service.GetAllBlogs().pipe(
                    map((data)=>{
                        return loadblogsuccess({bloglist:data});
                    }),
                    catchError((_error)=> of(loadblogfail({Errortext:_error.message})))
                )
            })
        )
    );

    
}
