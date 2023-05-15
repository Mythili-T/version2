/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITthirdsyblComponent } from './ITthirdsybl.component';

describe('ITthirdsyblComponent', () => {
  let component: ITthirdsyblComponent;
  let fixture: ComponentFixture<ITthirdsyblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITthirdsyblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITthirdsyblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
