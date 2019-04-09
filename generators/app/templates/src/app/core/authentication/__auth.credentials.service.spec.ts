import { TestBed, inject } from '@angular/core/testing';

import { CredentialsService } from './credentials.service';

const credentialsKey = 'credentials';

describe('CredentialsService', () => {
  let credentialsService: CredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredentialsService]
    });
  });

  beforeEach(inject([
    CredentialsService
  ], (_credentialsService: CredentialsService) => {
    credentialsService = _credentialsService;
  }));

  afterEach(() => {
    // Cleanup
    localStorage.removeItem(credentialsKey);
    sessionStorage.removeItem(credentialsKey);
  });

  describe('setCredentials', () => {
    it('should authenticate user if credentials are set', () => {
      // Act
      credentialsService.setCredentials({ username: 'me', token: '123' });

      // Assert
      expect(credentialsService.isAuthenticated()).toBe(true);
      expect(credentialsService.credentials.username).toBe('me');
    });

    it('should clean authentication', () => {
      // Act
      credentialsService.setCredentials(null);

      // Assert
      expect(credentialsService.isAuthenticated()).toBe(false);
    });

    it('should persist credentials for the session', () => {
      // Act
      credentialsService.setCredentials({ username: 'me', token: '123' });

      // Assert
      expect(sessionStorage.getItem(credentialsKey)).not.toBeNull();
      expect(localStorage.getItem(credentialsKey)).toBeNull();
    });

    it('should persist credentials across sessions', () => {
      // Act
      credentialsService.setCredentials({ username: 'me', token: '123' }, true);

      // Assert
      expect(localStorage.getItem(credentialsKey)).not.toBeNull();
      expect(sessionStorage.getItem(credentialsKey)).toBeNull();
    });

    it('should clear user authentication', () => {
      // Act
      credentialsService.setCredentials();

      // Assert
      expect(credentialsService.isAuthenticated()).toBe(false);
      expect(credentialsService.credentials).toBeNull();
      expect(sessionStorage.getItem(credentialsKey)).toBeNull();
      expect(localStorage.getItem(credentialsKey)).toBeNull();
    });
  });
});
