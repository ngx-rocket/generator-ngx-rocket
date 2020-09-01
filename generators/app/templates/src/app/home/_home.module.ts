import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from '@ionic/angular';
<% } else if (props.ui === 'material') { -%>
import { FlexLayoutModule } from '@angular/flex-layout';
<% } -%>
<% if (props.angulartics) { -%>
import { Angulartics2Module } from 'angulartics2';
<% } -%>

import { SharedModule } from '@shared';
<% if (props.ui === 'material') { -%>
import { MaterialModule } from '@app/material.module';
<% } -%>
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
<% if (props.ui === 'ionic') { -%>
    IonicModule,
<% } else if (props.ui === 'material') { -%>
    FlexLayoutModule,
    MaterialModule,
<% } -%>
<% if (props.angulartics) { -%>
    Angulartics2Module,
<% } -%>
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
