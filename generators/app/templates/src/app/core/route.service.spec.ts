import { TestBed, inject } from '@angular/core/testing';

import { ShellComponent } from './shell/shell.component';
import { Route } from './route.service';

describe('Route', () => {
  let route: Route;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Route
      ]
    });
  });

  beforeEach(inject([Route], (_route: Route) => {
    route = _route;
  }));

  describe('withShell', () => {
    it('should create routes as children of shell', () => {
      // Prepare
      const testRoutes = [{ path: 'test' }];

      // Act
      const routes = Route.withShell(testRoutes);

      // Assert
      expect(routes.length).toBe(1);
      expect(routes[0].path).toBe('');
      expect(routes[0].children).toBe(testRoutes);
      expect(routes[0].component).toBe(ShellComponent);
    });
  });
});
