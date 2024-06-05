import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotImageGeminiComponent } from './chatbot-image-gemini.component';

describe('ChatbotImageGeminiComponent', () => {
  let component: ChatbotImageGeminiComponent;
  let fixture: ComponentFixture<ChatbotImageGeminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotImageGeminiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatbotImageGeminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
