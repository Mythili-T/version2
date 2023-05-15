/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CseqpfinalComponent } from './cseqpfinal.component';

describe('CseqpfinalComponent', () => {
  let component: CseqpfinalComponent;
  let fixture: ComponentFixture<CseqpfinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseqpfinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseqpfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
