
import { createAction, props } from "@ngrx/store";


export const SHOW_ALERT = '[app event] show event';
export const EMPTY_ACTION = '[app event] empty';
export const LOAD_SPINNER = '[blog page] delete blog success';

export const ShowAlert = createAction(SHOW_ALERT, props<{ message : string , actionresult:string }>());

export const EmptyAction = createAction(EMPTY_ACTION);

export const loadspinner = createAction(LOAD_SPINNER,props<{isloaded:boolean}>());
