/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITsecondComponent } from './ITsecond.component';

describe('ITsecondComponent', () => {
  let component: ITsecondComponent;
  let fixture: ComponentFixture<ITsecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITsecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
