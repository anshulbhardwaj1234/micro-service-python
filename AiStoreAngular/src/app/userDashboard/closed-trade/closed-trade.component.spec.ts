import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedTradeComponent } from './closed-trade.component';

describe('ClosedTradeComponent', () => {
  let component: ClosedTradeComponent;
  let fixture: ComponentFixture<ClosedTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosedTradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClosedTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
