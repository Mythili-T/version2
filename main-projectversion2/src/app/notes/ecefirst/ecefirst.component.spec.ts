/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EcefirstComponent } from './ecefirst.component';

describe('EcefirstComponent', () => {
  let component: EcefirstComponent;
  let fixture: ComponentFixture<EcefirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcefirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
