import { BrowserModule } from '@angular/platform-browser';
<% if (props.ui === 'ionic') { -%>
import { NgModule } from '@angular/core';
<% } else { -%>
import { NgModule } from '@angular/core';
<%   if (props.location === 'hash') { -%>
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
<%   } -%>
<% } -%>
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<% if (props.pwa) { -%>
import { ServiceWorkerModule } from '@angular/service-worker';
<% } -%>
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'material') { -%>
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
<% } else if (props.ui === 'bootstrap') { -%>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<% } else if (props.ui === 'ionic') { -%>
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
<% } -%>
<% if (props.target.includes('cordova')) { -%>
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
<% } -%>
<% if (props.angulartics) { -%>
import { Angulartics2Module } from 'angulartics2';
<% } -%>
<% if (props.angulartics && props.analyticsProvider === 'ga') { -%>
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
<% } -%>

<% if (props.pwa) { -%>
import { environment } from '@env/environment';
<% } -%>
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
<% if (!props.lazy) { -%>
import { AboutModule } from './about/about.module';
<% } -%>
<% if (props.layout === 'tabs') { -%>
import { SettingsModule } from './settings/settings.module';
<% } -%>
<% if (props.auth) { -%>
import { LoginModule } from './login/login.module';
<% } -%>
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
<% if (props.pwa) { -%>
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
<% } -%>
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
<% if (props.ui === 'material') { -%>
    BrowserAnimationsModule,
    MaterialModule,
<% } else if (props.ui === 'bootstrap') { -%>
    NgbModule.forRoot(),
<% } else if (props.ui === 'ionic') { -%>
    IonicModule.forRoot(AppComponent, { locationStrategy: '<%= props.location === 'hash' ? 'hash' : 'path' %>' }),
<% } -%>
    CoreModule,
    SharedModule,
    HomeModule,
<% if (!props.lazy) { -%>
    AboutModule,
<% } -%>
<% if (props.auth) { -%>
    LoginModule,
<% } -%>
<% if (props.layout === 'tabs'){ -%>
    SettingsModule,
<% } -%>
<% if (props.angulartics && props.analyticsProvider === 'ga') { -%>
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
<% } else if (props.angulartics ) { -%>
    Angulartics2Module.forRoot([]),
<% } -%>
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
<% if (props.ui !== 'ionic' && props.location === 'hash') { -%>
    // This strategy with base-href './' allows to move the app to any subsite
<%   if (props.target.includes('cordova')) { -%>
    { provide: LocationStrategy, useClass: HashLocationStrategy },
<%   } else { -%>
    { provide: LocationStrategy, useClass: HashLocationStrategy }
<%   } -%>
<% } -%>
<% if (props.ui === 'ionic') { -%>
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
<% } -%>
<% if (props.target.includes('cordova')) { -%>
    Keyboard,
    StatusBar,
    SplashScreen
<% } -%>
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
