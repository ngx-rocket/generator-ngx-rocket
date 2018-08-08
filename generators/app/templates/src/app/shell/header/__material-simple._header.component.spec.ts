import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from '@app/material.module';
<% if (props.auth) { -%>
import { AuthenticationService, I18nService, MockAuthenticationService } from '@app/core';
<% } else {-%>
import { I18nService } from '@app/core';
<% }-%>
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        TranslateModule.forRoot()
      ],
      declarations: [HeaderComponent],
      providers: [
<% if (props.auth) { -%>
        { provide: AuthenticationService, useClass: MockAuthenticationService },
<% } -%>
        I18nService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
