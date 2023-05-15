/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItLabComponent } from './It-lab.component';

describe('ItLabComponent', () => {
  let component: ItLabComponent;
  let fixture: ComponentFixture<ItLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
