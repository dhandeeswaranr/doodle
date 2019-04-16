import { Component, OnInit, Input } from '@angular/core';
import  {Store } from '@ngrx/store';
import * as fromLandingPageActions from '../../store/actions';
import * as fromLandingPageReducer from '../../store/reducers';
import {observable, Observable} from 'rxjs'
import { from } from 'rxjs';
import {mailModel } from '../../model/mail.model'
@Component({
  selector: 'app-landing-page-container',
  templateUrl: './landing-page-container.component.html',
  styleUrls: ['./landing-page-container.component.scss']
})
export class LandingPageContainerComponent implements OnInit {
mailData$:Observable<any>;
InboxData;
  constructor(private store$:Store<any>) { }

  ngOnInit() {

     this.store$.select(fromLandingPageReducer.landingPageSelector).subscribe(res => {
       console.log("res", res)
     })
      this.mailData$ =  this.store$.select(fromLandingPageReducer.mailSelector)
      this.mailData$.subscribe()
  }

}
