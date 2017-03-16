import { Observable } from 'rxjs/Observable';

import { Credentials, LoginContext } from './authentication.service';

export class MockAuthenticationService {

  credentials: Credentials = {
    username: 'test',
    token: '123'
  };

  login(context: LoginContext): Observable<Credentials> {
    return Observable.of({
      username: context.username,
      token: '123456'
    });
  }

  logout(): Observable<boolean> {
    this.credentials = null;
    return Observable.of(true);
  }

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

}
