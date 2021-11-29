import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

<% if (props.auth) { -%>
import { AuthenticationService, CredentialsService } from '@app/auth';
<% } -%>

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private router: Router,
              private titleService: Title,
<% if (props.auth) { -%>
              private authenticationService: AuthenticationService,
              private credentialsService: CredentialsService,
<% } -%>
              private breakpoint: BreakpointObserver) { }

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
  get isMobile(): boolean {
    return this.breakpoint.isMatched(Breakpoints.Small) || this.breakpoint.isMatched(Breakpoints.XSmall);
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
