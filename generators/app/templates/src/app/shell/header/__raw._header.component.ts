import { Component, OnInit } from '@angular/core';
<% if (props.auth) { -%>
import { Router } from '@angular/router';

import { I18nService } from '@app/core';
import { AuthenticationService, CredentialsService } from '@app/auth';
<% } else { -%>

import { I18nService } from '@app/core';
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
              private credentialsService: CredentialsService,
              private i18nService: I18nService) { }
<% } else { -%>
  constructor(private i18nService: I18nService) { }
<% } -%>

  ngOnInit() { }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

<% if (props.auth) { -%>
  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
}

<% } -%>
  get currentLanguage(): string {
    return this.i18nService.language;
}

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
}

<% if (props.auth) { -%>
  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

<% } -%>
}
