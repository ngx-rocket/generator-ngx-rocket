import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } -%>
<% if (props.target.includes('cordova')) { -%>
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<% } -%>
<% if (props.angulartics && props.analyticsProvider === 'ga') { -%>
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
<% } -%>

import { CoreModule } from '@app/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
<% if (props.ui === 'ionic') { -%>
        IonicModule.forRoot(AppComponent),
<% } -%>
<% if (props.angulartics && props.analyticsProvider === 'ga') { -%>
        Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
<% } -%>
        RouterTestingModule,
        TranslateModule.forRoot(),
        CoreModule
      ],
      declarations: [AppComponent],
<% if (props.target.includes('cordova')) { -%>
      providers: [
        Keyboard,
        StatusBar,
        SplashScreen
      ]
<% } else { -%>
      providers: []
<% } -%>
    });
    TestBed.compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
