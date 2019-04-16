import {createFeatureSelector, createSelector, State } from "@ngrx/store";
import * as fromLandinPageReducers from './mail.reducers';


export interface allState{
    landingPageAllState:fromLandinPageReducers.landinPageState
}

export interface State{
    mailState:allState
}

export const reducers = {
    landingPageAllState:fromLandinPageReducers.reducers
}

export const getPageState = createFeatureSelector<allState>('MAILBOX');

export const landingPageSelector = createSelector(
    getPageState,
    state => state.landingPageAllState.id
)

export const mailSelector = createSelector(
    getPageState,
    state => state.landingPageAllState.emailPayload
)