/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EceLabComponent } from './ece-lab.component';

describe('EceLabComponent', () => {
  let component: EceLabComponent;
  let fixture: ComponentFixture<EceLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EceLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EceLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
