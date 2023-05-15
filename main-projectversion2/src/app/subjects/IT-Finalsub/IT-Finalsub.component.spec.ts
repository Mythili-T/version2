/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITFinalsubComponent } from './IT-Finalsub.component';

describe('ITFinalsubComponent', () => {
  let component: ITFinalsubComponent;
  let fixture: ComponentFixture<ITFinalsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITFinalsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITFinalsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
