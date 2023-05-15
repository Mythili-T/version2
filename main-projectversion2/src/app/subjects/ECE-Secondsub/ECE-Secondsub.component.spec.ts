/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ECESecondsubComponent } from './ECE-Secondsub.component';

describe('ECESecondsubComponent', () => {
  let component: ECESecondsubComponent;
  let fixture: ComponentFixture<ECESecondsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECESecondsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECESecondsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
