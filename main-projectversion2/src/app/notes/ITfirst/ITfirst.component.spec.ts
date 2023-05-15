/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITfirstComponent } from './ITfirst.component';

describe('ITfirstComponent', () => {
  let component: ITfirstComponent;
  let fixture: ComponentFixture<ITfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
