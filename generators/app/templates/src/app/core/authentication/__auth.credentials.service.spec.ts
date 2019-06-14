import { TestBed, inject } from '@angular/core/testing';

import { CredentialsService, Credentials } from './credentials.service';

const credentialsKey = 'credentials';

describe('CredentialsService', () => {
  let credentialsService: CredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredentialsService]
    });

    credentialsService = TestBed.get(CredentialsService);
  });

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
      expect((credentialsService.credentials as Credentials).username).toBe('me');
    });

    it('should clean authentication', () => {
      // Act
      credentialsService.setCredentials();

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
