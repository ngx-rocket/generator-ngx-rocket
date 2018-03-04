import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@i18n';
<% if (!props.lazy) { -%>
import { Route } from '@core';
<% } -%>
import { AboutComponent } from './about.component';

const routes: Routes = [
<% if (props.lazy) { -%>
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: AboutComponent, data: { title: extract('About') } }
<% } else { -%>
  Route.withShell([
    { path: 'about', component: AboutComponent, data: { title: extract('About') } }<% if (props.lazy) { %> as Route <% } %>
  ])
<% } -%>
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
