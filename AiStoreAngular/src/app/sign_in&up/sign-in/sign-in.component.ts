import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Auth/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignINComponent {
  username: string = '';
  password: string = '';
  JWT_Token:any = ''
  constructor(private router: Router,private Auth:AuthService,private http: HttpClient) {}

  ngOnInit() {}

  onSignIn() {
    
    
    const body = { Username: this.username,Password:this.password }
    this.http.post(`http://127.0.0.1:8000/api/SignIn/`, body).subscribe(
      (response) => {
        if(response){
          this.JWT_Token = response
          alert(response)
          this.Auth.verify(this.username)
          this.Auth.SetJWT(response)
          this.router.navigate(['/dashboard']); 
        }
      },
      (error) => {
        
        console.log(error)
      }
    )
  }

  onRegisterClick() {
    this.router.navigate(['/register']); 
  }
}
