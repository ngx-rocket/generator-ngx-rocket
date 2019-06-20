import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

<% if (props.auth) { -%>
import { AuthenticationService, CredentialsService, I18nService } from '@app/core';
import { MockAuthenticationService } from '@app/core/authentication/authentication.service.mock';
import { MockCredentialsService } from '@app/core/authentication/credentials.service.mock';
<% } else {-%>
import { I18nService } from '@app/core';
<% } -%>
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule,
        TranslateModule.forRoot()
      ],
      declarations: [HeaderComponent],
      providers: [
<% if (props.auth) { -%>
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        { provide: CredentialsService, useClass: MockCredentialsService },
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
