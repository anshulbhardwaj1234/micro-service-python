import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebEditorHeaderComponent } from './web-editor-header.component';

describe('WebEditorHeaderComponent', () => {
  let component: WebEditorHeaderComponent;
  let fixture: ComponentFixture<WebEditorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebEditorHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebEditorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
