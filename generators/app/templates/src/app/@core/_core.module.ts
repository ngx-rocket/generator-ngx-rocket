import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'bootstrap') { -%>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<% } else if (props.ui === 'material') { -%>
import { FlexLayoutModule } from '@angular/flex-layout';
<% } else if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } -%>

<% if (props.ui === 'material') { -%>
import { MaterialModule } from '@app/material.module';
<% } -%>
import { ShellComponent } from './shell/shell.component';
<% if (props.ui === 'bootstrap' || (props.ui === 'material' && props.layout === 'simple') || props.ui === 'raw') { -%>
import { HeaderComponent } from './shell/header/header.component';
<% } -%>
import { RouteReusableStrategy } from './route-reusable-strategy';
<% if (props.auth) { -%>
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationGuard } from './authentication/authentication.guard';
<% } -%>
import { I18nModule, I18nService } from '@i18n';
import { HttpService } from './http/http.service';
import { HttpCacheService } from './http/http-cache.service';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { CacheInterceptor } from './http/cache.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
<% if (props.ui === 'bootstrap') { -%>
    NgbModule,
<% } else if (props.ui === 'material') { -%>
    FlexLayoutModule,
    MaterialModule,
<% } else if (props.ui === 'ionic') { -%>
    IonicModule,
<% } -%>
    I18nModule,
    RouterModule
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
  ],
  providers: [
<% if (props.auth) { -%>
    AuthenticationService,
    AuthenticationGuard,
<% } -%>
    I18nService,
    HttpCacheService,
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
    CacheInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HttpClient,
      useClass: HttpService
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
