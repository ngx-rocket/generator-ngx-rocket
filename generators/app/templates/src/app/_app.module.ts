import { BrowserModule } from '@angular/platform-browser';
<% if (props.ui === 'ionic') { -%>
import { ErrorHandler, NgModule } from '@angular/core';
<% } else { -%>
import { NgModule } from '@angular/core';
<% } -%>
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
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
<% } -%>
<% if (props.target.includes('cordova')) { -%>
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
<% if (props.auth) { -%>
import { LoginModule } from './login/login.module';
<% } -%>
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
<% if (props.pwa) { -%>
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
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
    IonicModule.forRoot(AppComponent, { locationStrategy: 'path' }),
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
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
<% if (props.ui === 'ionic') { -%>
<%   if (props.target.includes('cordova')) { -%>
    { provide: ErrorHandler, useClass: IonicErrorHandler },
<%   } else { -%>
    { provide: ErrorHandler, useClass: IonicErrorHandler }
<%   } -%>
<% } -%>
<% if (props.target.includes('cordova')) { -%>
    Keyboard,
    StatusBar,
    SplashScreen
<% } -%>
  ],
<% if (props.ui === 'ionic') { -%>
  bootstrap: [IonicApp]
<% } else { -%>
  bootstrap: [AppComponent]
<% } -%>
})
export class AppModule { }
