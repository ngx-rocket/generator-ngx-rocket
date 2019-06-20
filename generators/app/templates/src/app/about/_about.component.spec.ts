import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<% if (props.ui === 'ionic') { -%>
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
<% } else if (props.ui === 'material') { -%>
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
<% } -%>

<% if (props.ui === 'material') { -%>
import { MaterialModule } from '@app/material.module';
<% } -%>
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<% if (props.ui === 'ionic') { -%>
        imports: [IonicModule.forRoot()],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
<% } else if (props.ui === 'material') { -%>
        imports: [
          BrowserAnimationsModule,
          FlexLayoutModule,
          MaterialModule
        ],
<% } -%>
        declarations: [AboutComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
