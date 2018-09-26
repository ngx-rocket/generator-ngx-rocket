import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } else if (props.ui === 'material') { -%>
import { FlexLayoutModule } from '@angular/flex-layout';
<% } -%>

<% if (props.ui === 'material') { -%>
import { MaterialModule } from '@app/material.module';
<% } -%>
import { I18nModule, LanguageSelectorComponent } from '@i18n';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
<% if (props.ui === 'material') { -%>
    FlexLayoutModule,
    MaterialModule,
<% } else if (props.ui === 'ionic') { -%>
    IonicModule,
<% } -%>
    CommonModule,
    I18nModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent,
    LanguageSelectorComponent
  ]
})
export class SharedModule { }
