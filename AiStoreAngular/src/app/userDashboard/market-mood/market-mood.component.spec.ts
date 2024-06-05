import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketMoodComponent } from './market-mood.component';

describe('MarketMoodComponent', () => {
  let component: MarketMoodComponent;
  let fixture: ComponentFixture<MarketMoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketMoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
