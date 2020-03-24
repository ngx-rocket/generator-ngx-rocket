import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { I18nService } from '@app/core';
<% if (props.auth) { -%>
import { AuthenticationService, CredentialsService } from '@app/auth';
<% } -%>

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav!: MatSidenav;

<% if (props.auth) { -%>
  constructor(private router: Router,
              private titleService: Title,
              private authenticationService: AuthenticationService,
              private credentialsService: CredentialsService,
<% } else { -%>
  constructor(private titleService: Title,
<% } -%>
              private i18nService: I18nService) { }

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
  get title(): string {
    return this.titleService.getTitle();
  }

}
