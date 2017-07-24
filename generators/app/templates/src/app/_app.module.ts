import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'bootstrap') { -%>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<% } else if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
<% } -%>
<% if (props.target.includes('cordova')) { -%>
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<% } -%>

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
<% if (props.auth) { -%>
import { LoginModule } from './login/login.module';
<% } -%>

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
<% if (props.ui === 'bootstrap') { -%>
    NgbModule.forRoot(),
<% } else if (props.ui === 'ionic') { -%>
    IonicModule.forRoot(AppComponent),
<% } -%>
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
<% if (props.auth) { -%>
    LoginModule,
<% } -%>
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
<% if (props.target.includes('cordova')) { -%>
    Keyboard,
    StatusBar,
<%   if (props.ui === 'ionic') { -%>
    SplashScreen,
    // Needed as Ionic overrides default strategy, dunno why since they don't use angular router...
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
<%   } else { -%>
    SplashScreen
<%   } -%>
<% } -%>
  ],
<% if (props.ui === 'ionic') { -%>
  bootstrap: [IonicApp]
<% } else { -%>
  bootstrap: [AppComponent]
<% } -%>
})
export class AppModule { }
