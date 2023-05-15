/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITqpfirstComponent } from './ITqpfirst.component';

describe('ITqpfirstComponent', () => {
  let component: ITqpfirstComponent;
  let fixture: ComponentFixture<ITqpfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITqpfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITqpfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
