/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EcesecondComponent } from './ecesecond.component';

describe('EcesecondComponent', () => {
  let component: EcesecondComponent;
  let fixture: ComponentFixture<EcesecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcesecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcesecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
