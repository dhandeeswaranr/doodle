import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import  {Store } from '@ngrx/store';
import * as fromLandingPageActions from '../../../mail/store/actions';
import * as fromLandingPageReducer from '../../../mail/store/reducers';
import {observable, Observable} from 'rxjs'
import { from } from 'rxjs';
import {mailModel } from '../../../mail/model/mail.model'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
loginId;
  constructor(private router:Router, private store$:Store<any>) { }

  ngOnInit() {
  }

  login(){
   // this.router.navigate(['/mail'])
   this.store$.dispatch(new fromLandingPageActions.fromLandingPageActions.landingPageLoad(this.loginId));
  }
}
