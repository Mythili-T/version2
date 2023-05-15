/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EcefirstsyblComponent } from './ecefirstsybl.component';

describe('EcefirstsyblComponent', () => {
  let component: EcefirstsyblComponent;
  let fixture: ComponentFixture<EcefirstsyblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcefirstsyblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcefirstsyblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
