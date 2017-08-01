import 'rxjs/add/operator/filter';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ActionSheetController, AlertController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

<% if (props.auth) { -%>
import { AuthenticationService } from '../authentication/authentication.service';
<% } -%>
import { I18nService } from '../i18n.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  navRoot: Component;
  subscription: any;

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

  ngOnInit() {
    this.updateNav(this.activatedRoute);

    // Bind Ionic navigation to Angular router events
    this.subscription = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(() => this.updateNav(this.activatedRoute));
  }

<% if (props.auth) { -%>
  showProfileActions() {
    const actionSheet = this.actionSheetController.create({ title: this.username });
    const buttons = [
      {
        text: this.translateService.instant('Logout'),
        icon: this.platform.is('ios') ? null : 'log-out',
        role: 'destructive',
        handler: () => this.logout()
      },
      {
        text: this.translateService.instant('Change language'),
        icon: this.platform.is('ios') ? null : 'globe',
        handler: () => {
          // Wait for action sheet dismiss animation to finish, see "Dismissing And Async Navigation" section in:
          // http://ionicframework.com/docs/api/components/action-sheet/ActionSheetController/#advanced
          actionSheet.dismiss().then(() => this.changeLanguage());
          return false;
        }
      },
      {
        text: this.translateService.instant('Cancel'),
        icon: this.platform.is('ios') ? null : 'close',
        role: 'cancel'
      }
    ];

    // On Cordova platform language is set to the device language
    if (this.platform.is('cordova')) {
      buttons.splice(1, 1);
    }

    buttons.forEach(button => actionSheet.addButton(button));
    actionSheet.present();
  }

  get username(): string {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }

  private logout() {
    this.authenticationService.logout()
    .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  private changeLanguage() {
<% } else { -%>
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  changeLanguage() {
<% } -%>
    this.alertController
      .create({
        title: this.translateService.instant('Change language'),
        inputs: this.i18nService.supportedLanguages.map(language => ({
          type: 'radio',
          label: language,
          value: language,
          checked: language === this.i18nService.language
        })),
        buttons: [
          {
            text: this.translateService.instant('Cancel'),
            role: 'cancel'
          },
          {
            text: this.translateService.instant('Ok'),
            handler: language => {
              this.i18nService.language = language;
            }
          }
        ]
      })
      .present();
  }

  private updateNav(route: ActivatedRoute) {
    // First component should always be IonicApp
    route = route.firstChild;
    if (route && route.component === ShellComponent) {
      route = route.firstChild;
      this.navRoot = route.component;
    }
  }

}
