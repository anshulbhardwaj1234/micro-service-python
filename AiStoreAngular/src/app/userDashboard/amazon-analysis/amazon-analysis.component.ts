import { Component } from '@angular/core';
import { CompoentHeadingComponent } from '../../components/compoent-heading/compoent-heading.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-amazon-analysis',
  standalone: true,
  imports: [CompoentHeadingComponent,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './amazon-analysis.component.html',
  styleUrl: './amazon-analysis.component.css'
})
export class AmazonAnalysisComponent {
  url:string=""
  ErrCode:any=""
  ErrString:string=""
  Report:any=''
  loader:boolean=false
  PosReview:boolean=false
  ModReview:boolean=false
  NegReview:boolean=false
  resultDIV:boolean=false
  ErrorDIV:boolean=false
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("https://www.amazon.in/Godrej-Refrigerator-EDGE-205B-WRF/dp/B0BS6XQVD1/ref=sr_1_10?refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-10")
    console.log("https://www.amazon.in/Whirlpool-Inverter-Direct-Cool-Refrigerator-Technology/dp/B0BSRV8C8Y/ref=sr_1_9?refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-9")
  }

  onSubmit() {
    this.resultDIV=false
    this.ErrorDIV=false
    this.PosReview=false
    this.NegReview=false
    this.ModReview=false
    this.analyze();
   
    
  }

  analyze() {
    if (this.url == "") {
      this.ErrCode = "No Input Found"
      this.ErrString = "Enter the URL In the Input Box"
      this.ErrorDIV = true
    }
    else {
      const data = {
        url: this.url,
      };
      this.loader = true
      this.http.post<any>('https://421f-34-150-150-100.ngrok-free.app/analyze_review',data).subscribe(
        (response) => {
          this.Report = response;
          console.log(this.Report)
          this.loader = false
          // console.log(this.Report.AnalysisResult);
          if (this.Report.AnalysisResult == "I recommend investing in the product as it would be a beneficial use of your money.") {
            this.PosReview = true
          } else if (this.Report.AnalysisResult == "I would strongly suggest against investing in this product") {
            this.NegReview = true
          } else {
            this.ModReview = true
          }
          if (this.Report.PageStatus !== 200) {
            this.resultDIV = false
            this.ErrCode = this.Report.PageStatus
            this.ErrString = this.Report.PageStatusString
            this.ErrorDIV = true
          }
          else {
            this.resultDIV = true
          }
        },
        (error) => {
          this.loader = false
          this.ErrCode = error.status
          this.ErrString = error.statusText
          this.ErrorDIV = true
          console.error('Error:', error);
        }
      )
      // console.log("request Send",data)
      // this.http.post('https://d848-34-173-29-192.ngrok-free.app/analyze_review', data).subscribe(
      //   (response) => {
      //     this.Report = response;
      //     console.log(this.Report)
      //     this.loader = false
      //     // console.log(this.Report.AnalysisResult);
      //     if (this.Report.AnalysisResult == "I recommend investing in the product as it would be a beneficial use of your money.") {
      //       this.PosReview = true
      //     } else if (this.Report.AnalysisResult == "I would strongly suggest against investing in this product") {
      //       this.NegReview = true
      //     } else {
      //       this.ModReview = true
      //     }
      //     if (this.Report.PageStatus !== 200) {
      //       this.resultDIV = false
      //       this.ErrCode = this.Report.PageStatus
      //       this.ErrString = this.Report.PageStatusString
      //       this.ErrorDIV = true
      //     }
      //     else {
      //       this.resultDIV = true
      //     }
      //   },
      //   (error) => {
      //     this.loader = false
      //     this.ErrCode = error.status
      //     this.ErrString = error.statusText
      //     this.ErrorDIV = true
      //     console.error('Error:', error);
      //   }
      // );
    }
  }

  Retry() {
    window.location.reload();
}
}
