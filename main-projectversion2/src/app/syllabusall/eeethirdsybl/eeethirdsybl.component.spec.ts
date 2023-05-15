/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EeethirdsyblComponent } from './eeethirdsybl.component';

describe('EeethirdsyblComponent', () => {
  let component: EeethirdsyblComponent;
  let fixture: ComponentFixture<EeethirdsyblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeethirdsyblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeethirdsyblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
