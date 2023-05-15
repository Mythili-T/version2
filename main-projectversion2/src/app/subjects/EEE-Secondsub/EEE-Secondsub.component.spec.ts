/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EEESecondsubComponent } from './EEE-Secondsub.component';

describe('EEESecondsubComponent', () => {
  let component: EEESecondsubComponent;
  let fixture: ComponentFixture<EEESecondsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEESecondsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEESecondsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
