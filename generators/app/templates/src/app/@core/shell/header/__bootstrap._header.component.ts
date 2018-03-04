import { Component, OnInit } from '@angular/core';
<% if (props.auth) { -%>
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
<% } else { -%>

<% } -%>
import { I18nService } from '@i18n';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuHidden = true;

<% if (props.auth) { -%>
  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private i18nService: I18nService) { }
<% } else { -%>
  constructor(private i18nService: I18nService) { }
<% } -%>

  ngOnInit() { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

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
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }

<% } -%>
}
