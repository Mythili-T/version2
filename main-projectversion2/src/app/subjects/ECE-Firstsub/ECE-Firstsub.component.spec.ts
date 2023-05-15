/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ECEFirstsubComponent } from './ECE-Firstsub.component';

describe('ECEFirstsubComponent', () => {
  let component: ECEFirstsubComponent;
  let fixture: ComponentFixture<ECEFirstsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECEFirstsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECEFirstsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
