import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MailModule } from './mail/mail.module'

const routes: Routes = [
  {
    path:'',
   // loadChildren:'./login/login.module#LoginModule'
   loadChildren:() => MailModule
  },
  /*{path:'mail',
   //loadChildren:'./mail/mail.module#MailModule'     
   loadChildren:() => MailModule
  }*/
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
