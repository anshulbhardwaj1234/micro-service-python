import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoentHeadingComponent } from './compoent-heading.component';

describe('CompoentHeadingComponent', () => {
  let component: CompoentHeadingComponent;
  let fixture: ComponentFixture<CompoentHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoentHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompoentHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
