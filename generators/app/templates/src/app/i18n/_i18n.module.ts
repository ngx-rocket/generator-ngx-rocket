import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'bootstrap') { -%>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<% } else if (props.ui === 'material') { -%>
import { FlexLayoutModule } from '@angular/flex-layout';
<% } else if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } -%>

import { I18nService } from './i18n.service';
import { I18nLangSelectorComponent } from './i18n-lang-selector.component';
<% if (props.ui === 'material') { -%>
import { MaterialModule } from '@app/material.module';
<% } -%>

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
<% if (props.ui === 'material') { -%>
    FlexLayoutModule,
    MaterialModule,
<% } else if (props.ui === 'ionic') { -%>
    IonicModule,
<% } -%>
  ],
  declarations: [
    I18nLangSelectorComponent,
  ],
  exports: [
    I18nLangSelectorComponent,
  ],
  providers: [
    I18nService,
  ]
})
export class I18nModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule  : I18nModule,
      providers : [
        I18nService,
      ]
    };
  }
}
