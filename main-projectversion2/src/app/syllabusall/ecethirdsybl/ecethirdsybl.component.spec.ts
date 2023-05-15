/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EcethirdsyblComponent } from './ecethirdsybl.component';

describe('EcethirdsyblComponent', () => {
  let component: EcethirdsyblComponent;
  let fixture: ComponentFixture<EcethirdsyblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcethirdsyblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcethirdsyblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
