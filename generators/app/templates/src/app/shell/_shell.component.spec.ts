import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } else if (props.ui === 'bootstrap') { -%>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<% } else if (props.ui === 'material') { -%>
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<% } -%>

<% if (props.auth) { -%>
import { AuthenticationService, CoreModule, MockAuthenticationService } from '@app/core';
<% } else {-%>
import { CoreModule } from '@app/core';
<% } -%>

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
<% if (props.ui === 'ionic') { -%>
        IonicModule.forRoot(ShellComponent),
<% } else if (props.ui === 'bootstrap') { -%>
        NgbModule.forRoot(),
<% } else if (props.ui === 'material') { -%>
        BrowserAnimationsModule,
<% } -%>
        CoreModule
<% if (props.auth) { -%>
      ],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService }
<% } -%>
      ],
      declarations: [ShellComponent, HeaderComponent]
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
