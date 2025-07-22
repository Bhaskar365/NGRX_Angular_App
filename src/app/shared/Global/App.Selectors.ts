
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppstateModel } from "./appstate.model";

const getAppstate = createFeatureSelector<AppstateModel>('app');

export const getspinnerstate = createSelector(getAppstate, (state)=>{
    return state.IsLoaded;
});

