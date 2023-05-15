/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EcethirdComponent } from './ecethird.component';

describe('EcethirdComponent', () => {
  let component: EcethirdComponent;
  let fixture: ComponentFixture<EcethirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcethirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcethirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
