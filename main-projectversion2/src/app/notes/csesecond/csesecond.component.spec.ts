import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSEsecondComponent } from './csesecond.component';

describe('CSEsecondComponent', () => {
  let component: CSEsecondComponent;
  let fixture: ComponentFixture<CSEsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSEsecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSEsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
