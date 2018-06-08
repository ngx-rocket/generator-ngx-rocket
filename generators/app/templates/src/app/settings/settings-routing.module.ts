import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { _settingsComponent } from '@app/settings/settings.component';

const routes: Routes = [
  Route.withShell([
    { path: 'settings', component: _settingsComponent, data: { title: extract('Settings') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SettingsRoutingModule { }
