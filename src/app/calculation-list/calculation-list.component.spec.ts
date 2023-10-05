import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationListComponent } from './calculation-list.component';

describe('CalculationListComponent', () => {
  let component: CalculationListComponent;
  let fixture: ComponentFixture<CalculationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculationListComponent]
    });
    fixture = TestBed.createComponent(CalculationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
