import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

<% if (props.auth) { -%>
import { AuthenticationService } from '../authentication/authentication.service';
import { MockAuthenticationService } from '../authentication/authentication.service.mock';
<% } -%>
import { ShellComponent } from './shell.component';
import { CoreModule } from '../core.module';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } else if (props.ui === 'bootstrap') { -%>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<% } -%>

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
<% } -%>
        CoreModule
<% if (props.auth) { -%>
      ],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService }
<% } -%>
      ]
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
