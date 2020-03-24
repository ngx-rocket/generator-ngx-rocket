import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
<% if (props.ui === 'bootstrap') { -%>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<% } else if (props.ui === 'material') { -%>
import { FlexLayoutModule } from '@angular/flex-layout';
<% } else if (props.ui === 'ionic') { -%>
import { IonicModule } from '@ionic/angular';
<% } -%>
<% if (props.ui === 'material') { -%>
import { MaterialModule } from '@app/material.module';
<% } -%>
<% if (props.auth) { -%>
import { AuthModule } from '@app/auth';
<% } -%>

import { ShellComponent } from './shell.component';
<% if (props.ui === 'bootstrap' || (props.ui === 'material' && props.layout === 'simple') || props.ui === 'raw') { -%>
import { HeaderComponent } from './header/header.component';
<% } -%>

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
<% if (props.ui === 'bootstrap') { -%>
    NgbModule,
<% } else if (props.ui === 'material') { -%>
    FlexLayoutModule,
    MaterialModule,
<% } else if (props.ui === 'ionic') { -%>
    IonicModule,
<% } -%>
<% if (props.auth) { -%>
    AuthModule,
<% } -%>
    RouterModule
  ],
  declarations: [
<% if (props.ui === 'bootstrap' || (props.ui === 'material' && props.layout === 'simple') || props.ui === 'raw') { -%>
    HeaderComponent,
<% } -%>
    ShellComponent
  ]
})
export class ShellModule {
}
