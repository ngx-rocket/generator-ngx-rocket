import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from '@i18n';
<% if (props.auth) { -%>
import { AuthenticationService } from '@app/core/authentication/authentication.service';
<% } -%>
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private translateService: TranslateService,
              private platform: Platform,
              private alertController: AlertController,
              private actionSheetController: ActionSheetController,
<% if (props.auth) { -%>
              private authenticationService: AuthenticationService,
<% } -%>
              private i18nService: I18nService) { }

  ngOnInit() { }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

<% if (props.auth) { -%>
  get username(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }
<% } -%>

}
