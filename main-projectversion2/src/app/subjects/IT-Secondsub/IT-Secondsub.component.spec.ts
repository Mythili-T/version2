/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITSecondsubComponent } from './IT-Secondsub.component';

describe('ITSecondsubComponent', () => {
  let component: ITSecondsubComponent;
  let fixture: ComponentFixture<ITSecondsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITSecondsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITSecondsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
