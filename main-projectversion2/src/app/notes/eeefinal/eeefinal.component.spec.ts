/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EeefinalComponent } from './eeefinal.component';

describe('EeefinalComponent', () => {
  let component: EeefinalComponent;
  let fixture: ComponentFixture<EeefinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeefinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeefinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
