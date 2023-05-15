/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EEEThirdsubComponent } from './EEE-Thirdsub.component';

describe('EEEThirdsubComponent', () => {
  let component: EEEThirdsubComponent;
  let fixture: ComponentFixture<EEEThirdsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEEThirdsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEEThirdsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
