import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ActionSheetController, AlertController, Platform } from '@ionic/angular';

<% if (props.auth) { -%>
import { AuthenticationService, CredentialsService } from '@app/auth';
<% } -%>

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private translateService: TranslateService,
<% if (props.auth) { -%>
              private authenticationService: AuthenticationService,
              private credentialsService: CredentialsService,
<% } -%>
              private platform: Platform,
              private alertController: AlertController,
              private actionSheetController: ActionSheetController) { }

  ngOnInit() { }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

<% if (props.auth) { -%>
  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }
<% } -%>

}
