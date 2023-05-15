/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EeesecondComponent } from './eeesecond.component';

describe('EeesecondComponent', () => {
  let component: EeesecondComponent;
  let fixture: ComponentFixture<EeesecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeesecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeesecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
