import {Injectable } from '@angular/core';
import {Store } from '@ngrx/store';
import{Actions,Effect,ofType } from '@ngrx/effects';
import{of } from 'rxjs'
import {map, switchMap, withLatestFrom, catchError } from 'rxjs/operators'

import * as fromLandinPageReducers from '../reducers';
import { MailService } from '../../service/mail.service';
import { fromLandingPageActions } from "../actions";

@Injectable()
export class landingPageEffects{
    constructor(
        private actions$:Actions,
        private store$:Store<any>,
        private service:MailService
    ){}


@Effect()
login$ = this.actions$
.pipe(
    ofType(fromLandingPageActions.LOGIN_PAGE_LOADING),
    withLatestFrom(this.store$.select(fromLandinPageReducers.landingPageSelector)),
    switchMap(([action, id]) => {
        return this.service.postMail(id)
        .pipe(
            map(res => new fromLandingPageActions.landingPageLoadSuccess(res)),
            catchError(error => of(new fromLandingPageActions.landingPageLoadFail(error)))
        )
    })
)
}