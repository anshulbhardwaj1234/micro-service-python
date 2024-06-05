import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router,private Auth:AuthService) {}

  ngOnInit() {}

  onSignIn() {
    
  }
  onSendOtp() {
    // Implement your OTP sending logic here
    console.log('Send OTP clicked! Email:', this.email);
  }
  onRegisterClick() {
    // Implement your registration redirection logic here (or create a separate component)
    console.log('Register clicked!');
  }
}