/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITqpfinalComponent } from './ITqpfinal.component';

describe('ITqpfinalComponent', () => {
  let component: ITqpfinalComponent;
  let fixture: ComponentFixture<ITqpfinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITqpfinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITqpfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
