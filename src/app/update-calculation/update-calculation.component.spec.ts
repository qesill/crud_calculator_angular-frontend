import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCalculationComponent } from './update-calculation.component';

describe('UpdateCalculationComponent', () => {
  let component: UpdateCalculationComponent;
  let fixture: ComponentFixture<UpdateCalculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCalculationComponent]
    });
    fixture = TestBed.createComponent(UpdateCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
