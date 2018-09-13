import { Component, OnInit } from '@angular/core';
<% if (props.auth) { -%>
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/core';
<% } else { -%>

<% } -%>
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

<% if (props.auth) { -%>
constructor(private router: Router,
  private authenticationService: AuthenticationService) { }
<% } else { -%>
constructor(private i18nService: I18nService) { }
<% } -%>

ngOnInit() { }

<% if (props.auth) { -%>
logout() {
  this.authenticationService.logout()
  .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
}
<% } -%>

<% if (props.auth) { -%>
get username(): string | null {
  const credentials = this.authenticationService.credentials;
return credentials ? credentials.username : null;
}

<% } -%>
}
