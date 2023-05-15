/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EeethirdComponent } from './eeethird.component';

describe('EeethirdComponent', () => {
  let component: EeethirdComponent;
  let fixture: ComponentFixture<EeethirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeethirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeethirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
