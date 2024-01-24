
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterModel } from './counter.model';

const getCounterState = createFeatureSelector<CounterModel>('counter');

export const getCounter = createSelector(getCounterState, (state)=>{
    return state.counter;
});

export const getMessage = createSelector(getCounterState, (state)=>{
    return state.message;
});

