import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, data: {title: extract('Login')}},
  {path: 'sign-up', component: SignUpComponent, data: {title: extract('Sign up')}},
  {path: 'lost-password', component: LostPasswordComponent, data: {title: extract('Lost password')}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LoginRoutingModule { }
