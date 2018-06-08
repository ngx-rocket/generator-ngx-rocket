import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { _settingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: _settingsComponent;
  let fixture: ComponentFixture<_settingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ _settingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(_settingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
