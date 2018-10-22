import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { I18nModule } from '@i18n';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    I18nModule,
    SettingsRoutingModule
  ],
  entryComponents: [
    SettingsComponent
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule { }
