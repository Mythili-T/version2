/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CseqpsecondComponent } from './cseqpsecond.component';

describe('CseqpsecondComponent', () => {
  let component: CseqpsecondComponent;
  let fixture: ComponentFixture<CseqpsecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseqpsecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseqpsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
