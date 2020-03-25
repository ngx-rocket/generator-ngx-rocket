import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: extract('Login') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule { }
