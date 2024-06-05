import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CompoentHeadingComponent } from '../../../components/compoent-heading/compoent-heading.component';
import Aos from 'aos';
// import { CompoentHeadingComponent } from '../../components/compoent-heading/compoent-heading.component';

@Component({
  selector: 'app-ourservices',
  standalone: true,
  imports: [MatIconModule,CompoentHeadingComponent],
  templateUrl: './ourservices.component.html',
  styleUrl: './ourservices.component.css'
})
export class OurservicesComponent {
ngOnInit(): void {
  Aos.refresh()
  
}
}
