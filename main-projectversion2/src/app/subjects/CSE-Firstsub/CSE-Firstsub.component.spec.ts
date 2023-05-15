/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CSEFirstsubComponent } from './CSE-Firstsub.component';

describe('CSEFirstsubComponent', () => {
  let component: CSEFirstsubComponent;
  let fixture: ComponentFixture<CSEFirstsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSEFirstsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSEFirstsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
