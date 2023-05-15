/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITfinalsyblComponent } from './ITfinalsybl.component';

describe('ITfinalsyblComponent', () => {
  let component: ITfinalsyblComponent;
  let fixture: ComponentFixture<ITfinalsyblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITfinalsyblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITfinalsyblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
