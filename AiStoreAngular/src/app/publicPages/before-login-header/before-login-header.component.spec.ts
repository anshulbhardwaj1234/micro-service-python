import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeLoginHeaderComponent } from './before-login-header.component';

describe('BeforeLoginHeaderComponent', () => {
  let component: BeforeLoginHeaderComponent;
  let fixture: ComponentFixture<BeforeLoginHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeLoginHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeforeLoginHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
