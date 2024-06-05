import { Component } from '@angular/core';
import { CompoentHeadingComponent } from '../../components/compoent-heading/compoent-heading.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-market-mood',
  standalone: true,
  imports: [CompoentHeadingComponent,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './market-mood.component.html',
  styleUrl: './market-mood.component.css'
})
export class MarketMoodComponent {
  constructor(private http: HttpClient) { }
  desriction:string=""
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

    const url = ' https://ca9a-35-185-249-105.ngrok-free.app/AskText/';
    const data = { question: this.desriction };

    this.http.post<ResponseType>(`${url}?question=${this.desriction}`, data)
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
