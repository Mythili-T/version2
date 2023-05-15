/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CsesecondsyblComponent } from './csesecondsybl.component';

describe('CsesecondsyblComponent', () => {
  let component: CsesecondsyblComponent;
  let fixture: ComponentFixture<CsesecondsyblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsesecondsyblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsesecondsyblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
