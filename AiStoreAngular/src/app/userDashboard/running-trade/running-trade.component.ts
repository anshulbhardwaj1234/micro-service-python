import { Component } from '@angular/core';
import { CompoentHeadingComponent } from '../../components/compoent-heading/compoent-heading.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-running-trade',
  standalone: true,
  imports: [CompoentHeadingComponent,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './running-trade.component.html',
  styleUrl: './running-trade.component.css'
})
export class RunningTradeComponent {
  uploaded = false;
  PDFfile: File | null = null;
  question: string = '';
  answer: string | null = null;
  answered = false

  constructor(private http: HttpClient) {}

  ngOnInit(): void { }

  
  onFileSelected(event: any) {

    const file:File = event.target.files[0];
    this.PDFfile = file
  }

  onUpload() {
    if (!this.PDFfile) {
      return; // Handle error: no file selected
    }

    const formData = new FormData();
    formData.append('file', this.PDFfile);

    this.http.post<any>('http://127.0.0.1:8001/uploadpdf/', formData)
      .subscribe(
        response => {
          console.log('Upload successful:', response);
          this.uploaded = true;
        },
        error => {
          console.error('Upload failed:', error);
          // Handle upload error
        }
      );
  }

  AskPDF() {
    if (!this.question) {
      return; // Handle error: no question entered
    }

    const url = 'http://127.0.0.1:8001/AskChatbot/';
    const data = { question: this.question,data:"a" };

    this.http.post<ResponseType>(`${url}?question=${this.question}&data=a`, data)
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
