/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CsethirdsyblComponent } from './csethirdsybl.component';

describe('CsethirdsyblComponent', () => {
  let component: CsethirdsyblComponent;
  let fixture: ComponentFixture<CsethirdsyblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsethirdsyblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsethirdsyblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
