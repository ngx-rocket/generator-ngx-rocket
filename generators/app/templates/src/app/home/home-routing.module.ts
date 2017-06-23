import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { _ as extract } from '@biesbjerg/ngx-translate-extract';

import { Route } from '../core/route.service';
import { HomeComponent } from './home.component';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: extract('Home') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
