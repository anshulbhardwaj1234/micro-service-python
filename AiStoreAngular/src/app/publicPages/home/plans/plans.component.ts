import { Component } from '@angular/core';
// import { CompoentHeadingComponent } from '../../components/compoent-heading/compoent-heading.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CompoentHeadingComponent } from '../../../components/compoent-heading/compoent-heading.component';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CompoentHeadingComponent,MatIconModule,RouterLink],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {

}
