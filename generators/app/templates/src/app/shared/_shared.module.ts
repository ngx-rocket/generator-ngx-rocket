import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } -%>

import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
<% if (props.ui === 'ionic') { -%>
    IonicModule,
<% } -%>
    CommonModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],
})
export class SharedModule { }
