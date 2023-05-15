/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EceqpfinalComponent } from './eceqpfinal.component';

describe('EceqpfinalComponent', () => {
  let component: EceqpfinalComponent;
  let fixture: ComponentFixture<EceqpfinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EceqpfinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EceqpfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
