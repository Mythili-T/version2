/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITqpthirdComponent } from './ITqpthird.component';

describe('ITqpthirdComponent', () => {
  let component: ITqpthirdComponent;
  let fixture: ComponentFixture<ITqpthirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITqpthirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITqpthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
