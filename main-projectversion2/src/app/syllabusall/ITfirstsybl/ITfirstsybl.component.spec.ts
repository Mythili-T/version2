/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITfirstsyblComponent } from './ITfirstsybl.component';

describe('ITfirstsyblComponent', () => {
  let component: ITfirstsyblComponent;
  let fixture: ComponentFixture<ITfirstsyblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITfirstsyblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITfirstsyblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
