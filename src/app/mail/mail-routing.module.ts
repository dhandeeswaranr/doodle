import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageContainerComponent } from './container/landing-page-container/landing-page-container.component'
import{InboxComponent } from './component/inbox/inbox.component';
import {LoginComponent } from './container/login/login.component'
const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'mail',
    component:LandingPageContainerComponent
},


  /*  children:[
        {
            path:'',
            component:LoginComponent
        },
        {
          path:'mail',
          component:InboxComponent
      }
    ]*/
  //}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }