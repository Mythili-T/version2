/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CsefinalsyblComponent } from './csefinalsybl.component';

describe('CsefinalsyblComponent', () => {
  let component: CsefinalsyblComponent;
  let fixture: ComponentFixture<CsefinalsyblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsefinalsyblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsefinalsyblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
