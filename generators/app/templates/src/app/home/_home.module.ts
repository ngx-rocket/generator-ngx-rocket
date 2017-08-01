import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } -%>

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
<% if (props.ui === 'ionic') { -%>
    IonicModule,
<% } -%>
    HomeRoutingModule
  ],
<% if (props.ui === 'ionic') { -%>
  entryComponents: [
    HomeComponent
  ],
<% } -%>
  declarations: [
    HomeComponent
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
