/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITsecondsyblComponent } from './ITsecondsybl.component';

describe('ITsecondsyblComponent', () => {
  let component: ITsecondsyblComponent;
  let fixture: ComponentFixture<ITsecondsyblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITsecondsyblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITsecondsyblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
