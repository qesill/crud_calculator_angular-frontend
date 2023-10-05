import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationDetailsComponent } from './calculation-details.component';

describe('CalculationDetailsComponent', () => {
  let component: CalculationDetailsComponent;
  let fixture: ComponentFixture<CalculationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculationDetailsComponent]
    });
    fixture = TestBed.createComponent(CalculationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
