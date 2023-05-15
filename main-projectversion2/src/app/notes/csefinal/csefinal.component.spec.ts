import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSEfinalComponent } from './csefinal.component';

describe('CSEfinalComponent', () => {
  let component: CSEfinalComponent;
  let fixture: ComponentFixture<CSEfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSEfinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSEfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
