import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
<% if (props.ui === 'bootstrap' || (props.ui === 'material' && props.layout === 'simple') || props.ui === 'raw') { -%>
import { HeaderComponent } from './header/header.component';
<% } -%>

@NgModule({
  imports: [
    CommonModule
  ],
<% if (props.ui === 'ionic') { -%>
  entryComponents: [
    ShellComponent
  ],
<% } -%>
  declarations: [
<% if (props.ui === 'bootstrap' || (props.ui === 'material' && props.layout === 'simple') || props.ui === 'raw') { -%>
    HeaderComponent,
<% } -%>
    ShellComponent
  ]
})
export class ShellModule {
}
