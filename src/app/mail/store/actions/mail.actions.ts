import { Action } from '@ngrx/store';


export const LOGIN_PAGE_LOADING ='[LOGIN PAGE] Loading';
export const LOGIN_PAGE_SUCCESS ='[LOGIN PAGE] Loading SUCCESS';
export const LOGIN_PAGE_FAIL ='[LOGIN PAGE] Loading Fail';

export class landingPageLoad implements Action{
    readonly type = LOGIN_PAGE_LOADING;
    constructor(public payload:any)
    {

    }
}

export class landingPageLoadSuccess implements Action{
    readonly type = LOGIN_PAGE_SUCCESS;
    constructor(public payload:any)
    {
        
    }
}

export class landingPageLoadFail implements Action{
    readonly type = LOGIN_PAGE_FAIL;
    constructor(public payload:any)
    {
        
    }
}

export type Actions = 
| landingPageLoad
| landingPageLoadSuccess
| landingPageLoadFail