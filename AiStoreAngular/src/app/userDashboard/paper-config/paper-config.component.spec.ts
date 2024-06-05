import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperConfigComponent } from './paper-config.component';

describe('PaperConfigComponent', () => {
  let component: PaperConfigComponent;
  let fixture: ComponentFixture<PaperConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaperConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
