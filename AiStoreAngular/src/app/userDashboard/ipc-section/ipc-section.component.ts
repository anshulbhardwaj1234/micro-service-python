import { Component } from '@angular/core';
import { CompoentHeadingComponent } from '../../components/compoent-heading/compoent-heading.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-ipc-section',
  standalone: true,
  imports: [CompoentHeadingComponent,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './ipc-section.component.html',
  styleUrl: './ipc-section.component.css'
})
export class IpcSectionComponent {
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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Conspiring to commit certain offences against the State     ------  121A")
    console.log("rape  --  376D")
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
    if (this.desriction == "") {
      this.ErrCode = "No Input Found"
      this.ErrString = "Enter the URL In the Input Box"
      this.ErrorDIV = true
    }
    else {
      const body = { description: this.desriction }
      this.loader = true
      this.http.post<any>(`https://6a5e-34-141-175-91.ngrok-free.app/ipc_section`, body).subscribe(
        (response) => {
          this.Report = response;
          console.log(this.Report)
          this.loader = false
          this.resultDIV = true
        },
        (error) => {
          this.loader = false
          this.ErrCode = error.status
          this.ErrString = error.statusText
          this.ErrorDIV = true
          console.error('Error:', error);
        }
      )
    }
  }








  Retry() {
    window.location.reload();
  }

}
