import { Component, OnInit } from '@angular/core';
import  {Store } from '@ngrx/store';
import * as fromLandingPageActions from '../../store/actions';
import * as fromLandingPageReducer from '../../store/reducers';
import {observable, Observable} from 'rxjs'
import { from } from 'rxjs';
import {mailModel } from '../../model/mail.model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginId;
  constructor(private store$:Store<any>) { }

  ngOnInit() {
  }
  login(){
    this.store$.dispatch(new fromLandingPageActions.fromLandingPageActions.landingPageLoad(this.loginId));
   }
}
