import { NgModule } from '@angular/core';
<% if (props.lazy) { -%>
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
<% } else { -%>
import { Routes, RouterModule } from '@angular/router';
<% } -%>

const routes: Routes = [
<% if (props.lazy) { -%>
  Shell.childRoutes([
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
  ]),
<% } -%>
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '<%= props.ui === 'ionic' && props.layout === 'tabs' ? 'tabs/home' : '' -%>', pathMatch: 'full' }
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
