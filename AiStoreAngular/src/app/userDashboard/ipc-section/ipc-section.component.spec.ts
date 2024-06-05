import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpcSectionComponent } from './ipc-section.component';

describe('IpcSectionComponent', () => {
  let component: IpcSectionComponent;
  let fixture: ComponentFixture<IpcSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpcSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpcSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
