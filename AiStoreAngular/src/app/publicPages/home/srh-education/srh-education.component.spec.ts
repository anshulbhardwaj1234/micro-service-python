import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrhEducationComponent } from './srh-education.component';

describe('SrhEducationComponent', () => {
  let component: SrhEducationComponent;
  let fixture: ComponentFixture<SrhEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrhEducationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SrhEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
