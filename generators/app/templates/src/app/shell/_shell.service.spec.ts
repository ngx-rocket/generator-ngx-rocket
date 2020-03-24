import { TestBed, inject } from '@angular/core/testing';

<% if (props.auth) { -%>
import { AuthenticationGuard, AuthenticationService } from '@app/auth';
import { MockAuthenticationService } from '@app/auth/authentication.service.mock';
<% } -%>
import { ShellComponent } from './shell.component';
import { Shell } from './shell.service';

describe('Shell', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShellComponent
<% if (props.auth) { -%>
      ],
      providers: [
        AuthenticationGuard,
        { provide: AuthenticationService, useClass: MockAuthenticationService },
<% } -%>
      ]
    });
  });

  describe('childRoutes', () => {
    it('should create routes as children of shell', () => {
      // Prepare
      const testRoutes = [{ path: 'test' }];

      // Act
      const result = Shell.childRoutes(testRoutes);

      // Assert
      expect(result.path).toBe('<%= props.ui === 'ionic' && props.layout === 'tabs' ? 'tabs' : '' -%>');
      expect(result.children).toBe(testRoutes);
      expect(result.component).toBe(ShellComponent);
    });
  });
});
