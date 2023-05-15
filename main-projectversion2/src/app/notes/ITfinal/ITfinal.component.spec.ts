/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITfinalComponent } from './ITfinal.component';

describe('ITfinalComponent', () => {
  let component: ITfinalComponent;
  let fixture: ComponentFixture<ITfinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITfinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
