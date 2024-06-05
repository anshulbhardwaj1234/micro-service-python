import { Component } from '@angular/core';
import { CompoentHeadingComponent } from '../../components/compoent-heading/compoent-heading.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-chatbot-data-gemini',
  standalone: true,
  imports: [CompoentHeadingComponent,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './chatbot-data-gemini.component.html',
  styleUrl: './chatbot-data-gemini.component.css'
})
export class ChatbotDataGeminiComponent {
  constructor(private http: HttpClient) { }
  desriction:string=""
  question:string=""
  ErrCode:any=""
  ErrString:string=""
  Report:any=''
  loader:boolean=false
  PosReview:boolean=false
  ModReview:boolean=false
  NegReview:boolean=false
  resultDIV:boolean=false
  ErrorDIV:boolean=false
  answer: string | null = null;
  answered = false

  onSubmit() {
    this.resultDIV=false
    this.ErrorDIV=false
    this.PosReview=false
    this.NegReview=false
    this.ModReview=false
    this.analyze();
  }



  analyze() {
    if (!this.desriction) {
      return; // Handle error: no question entered
    }

    const url = ' https://ca9a-35-185-249-105.ngrok-free.app/AskChatbot/';
    const data = { data:this.desriction,question: this.question };
    this.http.post<ResponseType>(`${url}?question=${this.question}&data=${this.desriction}`, data)
      .subscribe(
        response => {
          console.log('Question answered:', response);
          this.answer = response;
          this.answered = true
        },
        error => {
          console.error('Error asking question:', error);
          // Handle error
        }
      );
    }
}
