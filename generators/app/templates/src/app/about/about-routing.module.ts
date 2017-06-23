import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { _ as extract } from '@biesbjerg/ngx-translate-extract';

import { Route } from '../core/route.service';
import { AboutComponent } from './about.component';

const routes: Routes = Route.withShell([
  { path: 'about', component: AboutComponent, data: { title: extract('About') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
