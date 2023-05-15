/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CSEFinalsubComponent } from './CSE-Finalsub.component';

describe('CSEFinalsubComponent', () => {
  let component: CSEFinalsubComponent;
  let fixture: ComponentFixture<CSEFinalsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSEFinalsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSEFinalsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
