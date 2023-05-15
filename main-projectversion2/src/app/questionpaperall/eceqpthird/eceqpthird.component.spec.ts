/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EceqpthirdComponent } from './eceqpthird.component';

describe('EceqpthirdComponent', () => {
  let component: EceqpthirdComponent;
  let fixture: ComponentFixture<EceqpthirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EceqpthirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EceqpthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
