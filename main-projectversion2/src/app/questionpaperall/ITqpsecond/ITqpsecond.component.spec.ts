/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITqpsecondComponent } from './ITqpsecond.component';

describe('ITqpsecondComponent', () => {
  let component: ITqpsecondComponent;
  let fixture: ComponentFixture<ITqpsecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITqpsecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITqpsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
