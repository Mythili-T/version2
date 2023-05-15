/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EceqpfirstComponent } from './eceqpfirst.component';

describe('EceqpfirstComponent', () => {
  let component: EceqpfirstComponent;
  let fixture: ComponentFixture<EceqpfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EceqpfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EceqpfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
