import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSEthirdComponent } from './csethird.component';

describe('CSEthirdComponent', () => {
  let component: CSEthirdComponent;
  let fixture: ComponentFixture<CSEthirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSEthirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSEthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
