import { Component } from '@angular/core';
import { OurservicesComponent } from '../home/ourservices/ourservices.component';
import { CompoentHeadingComponent } from '../../components/compoent-heading/compoent-heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [OurservicesComponent,CompoentHeadingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
