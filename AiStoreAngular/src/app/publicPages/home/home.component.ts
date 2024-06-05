import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { SrhEducationComponent } from './srh-education/srh-education.component';
import { PlansComponent } from './plans/plans.component';
import Aos from 'aos';
import { RouterLink } from '@angular/router';
// import { ContentHomeComponent } from './content-home/content-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,OurservicesComponent,SrhEducationComponent,PlansComponent,RouterLink
    // ,ContentHomeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(): void {
    Aos.init()
  }
}
