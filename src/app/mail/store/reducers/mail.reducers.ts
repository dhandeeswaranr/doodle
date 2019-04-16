import {mailModel } from '../../model/mail.model';
import * as fromActions from '../actions';

export interface landinPageState{
    loading:boolean;
    emailPayload:mailModel[];
    loaded:boolean;
    id:number;
}

export const initialState:landinPageState = {
loading:false,
emailPayload:[],
loaded:false,
id:0
}

export function reducers (state=initialState, actions:fromActions.fromLandingPageActions.Actions):landinPageState{

    switch(actions.type){
        case fromActions.fromLandingPageActions.LOGIN_PAGE_LOADING:{
            return{
                ...state,
                loading:true,
                loaded:false,
                //emailPayload:actions.payload
                id:actions.payload
            }
        }

        case fromActions.fromLandingPageActions.LOGIN_PAGE_SUCCESS:{
            return{
                ...state,
                loading:true,
                loaded:true,
                emailPayload:actions.payload
            }
        }

        case fromActions.fromLandingPageActions.LOGIN_PAGE_FAIL:{
            return{
                ...state,
                loaded:false,
                loading:false,

            }
        }


        default:{
            return{
                ...state
            }
        }
    }
}
