/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EeeqpsecondComponent } from './eeeqpsecond.component';

describe('EeeqpsecondComponent', () => {
  let component: EeeqpsecondComponent;
  let fixture: ComponentFixture<EeeqpsecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeeqpsecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeeqpsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
