import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './container/login-page/login-page.component';
import {LoginRoutingModule } from './login-routing.module'
import {MaterialModule } from '../material/material.module'
import { StoreModule} from '@ngrx/store';
import {EffectsModule } from '@ngrx/effects'
import{ StoreDevtoolsModule} from '@ngrx/store-devtools'
import { HttpClientModule,  } from '@angular/common/http';
import { reducers} from '../mail/store/reducers';
import { effects } from '../mail//store/effects'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    LoginRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('MAILBOX', reducers),
    EffectsModule.forFeature(effects),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ]
})
export class LoginModule { }
