import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
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
