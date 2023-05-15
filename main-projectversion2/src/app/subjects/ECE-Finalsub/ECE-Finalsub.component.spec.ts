/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ECEFinalsubComponent } from './ECE-Finalsub.component';

describe('ECEFinalsubComponent', () => {
  let component: ECEFinalsubComponent;
  let fixture: ComponentFixture<ECEFinalsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECEFinalsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECEFinalsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
