import { Component, OnInit } from '@angular/core';
<% if (props.auth) { -%>
import { Router } from '@angular/router';

import { AuthenticationService, CredentialsService } from '@app/auth';
<% } -%>

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

<% if (props.auth) { -%>
  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private credentialsService: CredentialsService) { }
<% } else { -%>
  constructor() { }
<% } -%>

  ngOnInit() { }

<% if (props.auth) { -%>
  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

<% } -%>
}
