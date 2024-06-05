import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonAnalysisComponent } from './amazon-analysis.component';

describe('AmazonAnalysisComponent', () => {
  let component: AmazonAnalysisComponent;
  let fixture: ComponentFixture<AmazonAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmazonAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmazonAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
