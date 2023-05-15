/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EeeqpfirstComponent } from './eeeqpfirst.component';

describe('EeeqpfirstComponent', () => {
  let component: EeeqpfirstComponent;
  let fixture: ComponentFixture<EeeqpfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeeqpfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeeqpfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
