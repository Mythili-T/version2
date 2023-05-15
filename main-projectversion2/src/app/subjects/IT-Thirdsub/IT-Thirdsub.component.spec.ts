/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITThirdsubComponent } from './IT-Thirdsub.component';

describe('ITThirdsubComponent', () => {
  let component: ITThirdsubComponent;
  let fixture: ComponentFixture<ITThirdsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITThirdsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITThirdsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
