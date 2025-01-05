import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvaCalculatorComponent } from './tva-calculator.component';

describe('TvaCalculatorComponent', () => {
  let component: TvaCalculatorComponent;
  let fixture: ComponentFixture<TvaCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvaCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
