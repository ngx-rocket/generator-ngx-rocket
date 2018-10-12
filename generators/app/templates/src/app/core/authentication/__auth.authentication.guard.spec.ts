import { TestBed, inject } from '@angular/core/testing';
import { Router, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { MockAuthenticationService } from './authentication.service.mock';
import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  let authenticationGuard: AuthenticationGuard;
  let authenticationService: MockAuthenticationService;
  let mockRouter: any;
  let mockSnapshot: RouterStateSnapshot;

  beforeEach(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    mockSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);

    TestBed.configureTestingModule({
      providers: [
        AuthenticationGuard,
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        { provide: Router, useValue: mockRouter },
      ]
    });
  });

  beforeEach(inject([
    AuthenticationGuard,
    AuthenticationService
  ], (_authenticationGuard: AuthenticationGuard,
      _authenticationService: MockAuthenticationService) => {

    authenticationGuard = _authenticationGuard;
    authenticationService = _authenticationService;
  }));

  it('should have a canActivate method', () => {
    expect(typeof authenticationGuard.canActivate).toBe('function');
  });

  it('should return true if user is authenticated', () => {
    expect(authenticationGuard.canActivate(null, mockSnapshot)).toBe(true);
  });

  it('should return false and redirect to login if user is not authenticated', () => {
    // Arrange
    authenticationService.credentials = null;

    // Act
    const result = authenticationGuard.canActivate(null, mockSnapshot);

    // Assert
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {replaceUrl: true});
    expect(result).toBe(false);
  });

  it('should save url if user is not authenticated', () => {
    authenticationService = {
      'credentials': null,
      'redirectUrl': '/about',
      'isAuthenticated':  null,
      'login': null,
      'logout': null
    };
    mockRouter.url = '/about';
    authenticationGuard.canActivate(null, mockSnapshot);
    expect(authenticationService.redirectUrl).toBe('/about');
  });
});
