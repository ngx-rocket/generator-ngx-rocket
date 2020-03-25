import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'bootstrap') { -%>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<% } else if (props.ui === 'material') { -%>
import { FlexLayoutModule } from '@angular/flex-layout';
<% } else if (props.ui === 'ionic') { -%>
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
<% } -%>

<% if (props.ui === 'material') { -%>
import { MaterialModule } from '@app/material.module';
<% } -%>
import { LanguageSelectorComponent } from './language-selector.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
<% if (props.ui === 'material') { -%>
    FlexLayoutModule,
    MaterialModule,
<% } else if (props.ui === 'bootstrap') { -%>
    NgbModule,
<% } else if (props.ui === 'ionic') { -%>
    FormsModule,
    IonicModule,
<% } -%>
  ],
  declarations: [
    LanguageSelectorComponent,
  ],
  exports: [
    LanguageSelectorComponent,
  ]
})
export class I18nModule { }
