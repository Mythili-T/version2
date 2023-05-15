/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EEEFinalsubComponent } from './EEE-Finalsub.component';

describe('EEEFinalsubComponent', () => {
  let component: EEEFinalsubComponent;
  let fixture: ComponentFixture<EEEFinalsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEEFinalsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEEFinalsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
