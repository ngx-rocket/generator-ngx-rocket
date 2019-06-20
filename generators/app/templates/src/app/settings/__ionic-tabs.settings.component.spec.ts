import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ActionSheetController, AlertController, Platform } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          TranslateModule.forRoot(),
          IonicModule.forRoot(),
          CoreModule,
          SharedModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [SettingsComponent],
        providers: [
          Platform,
          AlertController,
          ActionSheetController,
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
