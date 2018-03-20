import { Route as ngRoute, Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
<% if (props.auth) { -%>
import { AuthenticationGuard } from './authentication/authentication.guard';
<% } -%>

/**
 * Provides helper methods to create routes.
 */
export class Route {

  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return {Route} The new route using shell as the base.
   */
  static withShell(routes: Routes): ngRoute {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
<% if (props.auth) { -%>
      canActivate: [AuthenticationGuard],
<% } -%>
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true }
    };
  }

}
