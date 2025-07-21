import { Injectable } from '@angular/core';
import { MasterService } from '../../master.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addblog, addblogsuccess, deleteblog, deleteblogsuccess, LOAD_BLOG, loadblogfail, loadblogsuccess, loadspinner, updateblog, updateblogsuccess } from './Blog.actions';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { BlogModel } from './Blog.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmptyAction, ShowAlert } from '../../Global/App.Action';

@Injectable()

export class BlogEffects {

    constructor(private action$: Actions,
        private service: MasterService,
        private _snackbar: MatSnackBar) { }

    _blog = createEffect(() =>
        this.action$.pipe(
            ofType(LOAD_BLOG),
            exhaustMap((action) => {
                return this.service.GetAllBlogs().pipe(
                    map((data) => {
                        return loadblogsuccess({ bloglist: data });
                    }),
                    catchError((_error) => of(loadblogfail({ Errortext: _error }),loadspinner({isLoaded:false})))
                )
            })
        )
    );

    _AddBlog = createEffect(() =>
        this.action$.pipe(
            ofType(addblog),
            switchMap(action =>
                this.service.CreateBlog(action.bloginput).pipe(
                    switchMap(data => of(
                        addblogsuccess({ bloginput: data as BlogModel }),
                        ShowAlert({ message: 'Created Successfully.', actionresult: 'pass' })
                    )),
                    catchError((_error) => of(ShowAlert({ message: 'Create Fail.', actionresult: 'fail' }),loadspinner({isLoaded:false})))
                )
            )
        )
    );

    _UpdateBlog = createEffect(() =>
        this.action$.pipe(
            ofType(updateblog),
            switchMap(action =>
                this.service.UpdateBlog(action.bloginput).pipe(
                    switchMap(res => of(
                        updateblogsuccess({ bloginput: action.bloginput }),
                        ShowAlert({ message: 'Updated Successfully.', actionresult: 'pass' })
                    )),
                    catchError((_error) => of(ShowAlert({ message: 'Update Failed - Due to ' + _error.message, actionresult: 'fail' }),loadspinner({isLoaded:false})))
                )
            )
        )
    );

    _DeleteBlog = createEffect(() => 
        this.action$.pipe(
            ofType(deleteblog),
            switchMap(action => 
                this.service.DeleteBlog(action.id).pipe(
                    switchMap(res => of(
                        deleteblogsuccess({id:action.id}),
                        ShowAlert({message: 'Removed successfully', actionresult:'pass'})
                    )),
                    catchError((_error)=>of(ShowAlert({message:'Remove Fail',actionresult:'fail'}),loadspinner({isLoaded:false})))
                )
            )
        )
    );
}
