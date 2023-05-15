/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EeefirstComponent } from './eeefirst.component';

describe('EeefirstComponent', () => {
  let component: EeefirstComponent;
  let fixture: ComponentFixture<EeefirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeefirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
