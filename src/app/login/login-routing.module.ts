import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './container/login-page/login-page.component'
import {MailModule } from '../mail/mail.module'
const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent
  
  },
  {
      path:'mail',
      loadChildren:() => MailModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }