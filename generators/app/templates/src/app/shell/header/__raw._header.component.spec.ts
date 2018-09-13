import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

<% if (props.auth) { -%>
import { AuthenticationService, MockAuthenticationService } from '@app/core';
<% } -%>
import { I18nModule, I18nService } from '@i18n';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        I18nModule
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
