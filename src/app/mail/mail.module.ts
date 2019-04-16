import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageContainerComponent } from './container/landing-page-container/landing-page-container.component';
import { MailRoutingModule} from './mail-routing.module';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import {MaterialModule } from '../material/material.module';
import { InboxComponent } from './component/inbox/inbox.component';
import { ViewMessageDialogComponent } from './component/view-message-dialog/view-message-dialog.component'
import { StoreModule} from '@ngrx/store';
import {EffectsModule } from '@ngrx/effects'
import{ StoreDevtoolsModule} from '@ngrx/store-devtools'
import { HttpClientModule,  } from '@angular/common/http';
import { reducers} from './store/reducers';
import { effects } from './store/effects';
import { LoginComponent } from './container/login/login.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LandingPageContainerComponent, SidenavComponent, InboxComponent, ViewMessageDialogComponent, LoginComponent],
  imports: [
    CommonModule,
    MailRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('MAILBOX', reducers),
    EffectsModule.forFeature(effects),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })

  ],
  exports:[
   // MailRoutingModule
  ],
  entryComponents:[ViewMessageDialogComponent]
})
export class MailModule { }
