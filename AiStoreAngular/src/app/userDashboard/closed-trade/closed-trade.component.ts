import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { StripeCardElement, StripeCardElementOptions } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-closed-trade',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './closed-trade.component.html',
  styleUrl: './closed-trade.component.css'
})
export class ClosedTradeComponent {
  stripePromise = loadStripe('pk_test_51P0eSiSEtYbMvd3Eog7AFqiJNChIQG8AMuDTBWn0haFur7tSqyysPfnUENOm5T0epVzM3jJ4yeH3WU2Rgr0Qxy9J00RriyTNj9');
  username: string = '';
  email: string = '';
  password: string = '';
  selectedPlan: number = 1; // Default to 1-month plan


  paymentForm: FormGroup;
  card!: StripeCardElement;
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  constructor(private formBuilder: FormBuilder,) {
    this.paymentForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  submitPayment() {
    if (this.paymentForm.valid) {
      
    }
  }

  
  onBuySubscription(): void {
    console.log(`Buy subscription for ${this.selectedPlan} months`);
    // Implement your logic to handle subscription purchase here
    // This could involve sending data to a server or integrating with a payment gateway
  }
}
