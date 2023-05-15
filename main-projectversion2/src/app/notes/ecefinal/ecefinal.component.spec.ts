/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EcefinalComponent } from './ecefinal.component';

describe('EcefinalComponent', () => {
  let component: EcefinalComponent;
  let fixture: ComponentFixture<EcefinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcefinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcefinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
