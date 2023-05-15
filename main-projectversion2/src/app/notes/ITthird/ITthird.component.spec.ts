/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITthirdComponent } from './ITthird.component';

describe('ITthirdComponent', () => {
  let component: ITthirdComponent;
  let fixture: ComponentFixture<ITthirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITthirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
