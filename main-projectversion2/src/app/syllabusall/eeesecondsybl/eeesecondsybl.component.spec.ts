/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EeesecondsyblComponent } from './eeesecondsybl.component';

describe('EeesecondsyblComponent', () => {
  let component: EeesecondsyblComponent;
  let fixture: ComponentFixture<EeesecondsyblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeesecondsyblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeesecondsyblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
