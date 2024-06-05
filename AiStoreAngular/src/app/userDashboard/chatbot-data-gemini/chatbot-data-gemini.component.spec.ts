import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotDataGeminiComponent } from './chatbot-data-gemini.component';

describe('ChatbotDataGeminiComponent', () => {
  let component: ChatbotDataGeminiComponent;
  let fixture: ComponentFixture<ChatbotDataGeminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotDataGeminiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatbotDataGeminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
