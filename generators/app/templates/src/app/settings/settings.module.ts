import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { SettingsRoutingModule } from './settings-routing.module';
import { _settingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    SettingsRoutingModule
  ],
  entryComponents: [
    _settingsComponent
  ],
  declarations: [
    _settingsComponent
  ]
})
export class SettingsModule { }
