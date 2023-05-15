/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EceqpsecondComponent } from './eceqpsecond.component';

describe('EceqpsecondComponent', () => {
  let component: EceqpsecondComponent;
  let fixture: ComponentFixture<EceqpsecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EceqpsecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EceqpsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
