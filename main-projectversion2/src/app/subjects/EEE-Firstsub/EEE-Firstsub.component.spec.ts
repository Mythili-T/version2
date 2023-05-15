/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EEEFirstsubComponent } from './EEE-Firstsub.component';

describe('EEEFirstsubComponent', () => {
  let component: EEEFirstsubComponent;
  let fixture: ComponentFixture<EEEFirstsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEEFirstsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEEFirstsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
