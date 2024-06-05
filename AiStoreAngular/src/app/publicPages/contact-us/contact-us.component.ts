import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CompoentHeadingComponent } from '../../components/compoent-heading/compoent-heading.component';
import { OurservicesComponent } from '../home/ourservices/ourservices.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [MatIconModule,CompoentHeadingComponent,OurservicesComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
