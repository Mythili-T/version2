/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EeeqpfinalComponent } from './eeeqpfinal.component';

describe('EeeqpfinalComponent', () => {
  let component: EeeqpfinalComponent;
  let fixture: ComponentFixture<EeeqpfinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeeqpfinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeeqpfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
