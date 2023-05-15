/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EcefinalsyblComponent } from './ecefinalsybl.component';

describe('EcefinalsyblComponent', () => {
  let component: EcefinalsyblComponent;
  let fixture: ComponentFixture<EcefinalsyblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcefinalsyblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcefinalsyblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
