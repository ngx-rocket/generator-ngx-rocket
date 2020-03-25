import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
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
import { I18nService } from './i18n.service';
import { LanguageSelectorComponent } from './language-selector.component';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<% if (props.ui === 'ionic') { -%>
        imports: [
          TranslateModule.forRoot(),
          IonicModule.forRoot()
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
<% } else { -%>
        imports: [
<%   if (props.ui === 'material') { -%>
          BrowserAnimationsModule,
          FlexLayoutModule,
          MaterialModule,
<%   } -%>
          TranslateModule.forRoot()
        ],
<% } -%>
        declarations: [LanguageSelectorComponent],
        providers: [I18nService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
