/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CseqpthirdComponent } from './cseqpthird.component';

describe('CseqpthirdComponent', () => {
  let component: CseqpthirdComponent;
  let fixture: ComponentFixture<CseqpthirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseqpthirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseqpthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
