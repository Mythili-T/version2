/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EeeqpthirdComponent } from './eeeqpthird.component';

describe('EeeqpthirdComponent', () => {
  let component: EeeqpthirdComponent;
  let fixture: ComponentFixture<EeeqpthirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeeqpthirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeeqpthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
