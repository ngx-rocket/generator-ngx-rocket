import { Component, OnInit, Input } from '@angular/core';
<% if (props.ui === 'ionic') { -%>
import { TranslateService } from '@ngx-translate/core';
import { AlertController, Platform } from 'ionic-angular';
<% } -%>

import { Logger } from '@core';
import { I18nService } from './i18n.service';

@Component({
  selector: 'i18n-language-selector',
  templateUrl: './i18n-lang-selector.component.html',
})
export class I18nLangSelectorComponent implements OnInit {
  @Input() withIcon: boolean = false;
  @Input() withText: boolean = true;
  @Input() color: string;

  constructor(
<% if (props.ui === 'ionic') { -%>
    private alertController: AlertController,
    private translateService: TranslateService,
<% } -%>
    private i18nService: I18nService
  ) { }

  ngOnInit() { }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
<% if (props.ui === 'ionic') { -%>
  changeLanguage() {
    this.alertController
      .create({
        title: this.translateService.instant('Change language'),
        inputs: this.i18nService.supportedLanguages.map(language => ({
          type: 'radio',
          label: this.translateService.instant(language),
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
<% } -%>

}

