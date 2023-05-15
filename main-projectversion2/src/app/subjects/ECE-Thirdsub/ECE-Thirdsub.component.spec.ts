/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ECEThirdsubComponent } from './ECE-Thirdsub.component';

describe('ECEThirdsubComponent', () => {
  let component: ECEThirdsubComponent;
  let fixture: ComponentFixture<ECEThirdsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECEThirdsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECEThirdsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
