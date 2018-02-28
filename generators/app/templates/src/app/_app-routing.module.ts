import { NgModule } from '@angular/core';
<% if (props.lazy) { -%>
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Route } from '@core';
<% } else { -%>
import { Routes, RouterModule } from '@angular/router';
<% } -%>

const routes: Routes = [
<% if (props.lazy) { -%>
  Route.withShell([
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
  ]),
<% } -%>
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
<% if (props.lazy) { -%>
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
<% } else { -%>
  imports: [RouterModule.forRoot(routes)],
<% } -%>
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
