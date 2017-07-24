import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } -%>

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
<% if (props.ui === 'ionic') { -%>
    IonicModule,
<% } -%>
    AboutRoutingModule
  ],
<% if (props.ui === 'ionic') { -%>
  entryComponents: [
    AboutComponent
  ],
<% } -%>
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
