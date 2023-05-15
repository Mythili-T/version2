/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITFirstSubComponent } from './IT-FirstSub.component';

describe('ITFirstSubComponent', () => {
  let component: ITFirstSubComponent;
  let fixture: ComponentFixture<ITFirstSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITFirstSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITFirstSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
