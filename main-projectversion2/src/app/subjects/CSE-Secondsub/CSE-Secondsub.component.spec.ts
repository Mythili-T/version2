/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CSESecondsubComponent } from './CSE-Secondsub.component';

describe('CSESecondsubComponent', () => {
  let component: CSESecondsubComponent;
  let fixture: ComponentFixture<CSESecondsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSESecondsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSESecondsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
