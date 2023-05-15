/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CSEThirdsubComponent } from './CSE-Thirdsub.component';

describe('CSEThirdsubComponent', () => {
  let component: CSEThirdsubComponent;
  let fixture: ComponentFixture<CSEThirdsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSEThirdsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSEThirdsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
