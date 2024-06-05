import { Component, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { RouterLink } from '@angular/router';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { CompoentHeadingComponent } from '../../components/compoent-heading/compoent-heading.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,UserHeaderComponent,CommonModule,RouterOutlet,CompoentHeadingComponent,MatIconModule
   
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
}
