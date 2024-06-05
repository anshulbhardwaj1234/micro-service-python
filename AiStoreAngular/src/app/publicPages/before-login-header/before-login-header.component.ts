import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-before-login-header',
  standalone: true,
  imports: [NgbCollapseModule,RouterLink,MatIconModule],
  templateUrl: './before-login-header.component.html',
  styleUrl: './before-login-header.component.css'
})
export class BeforeLoginHeaderComponent {
  isMenuCollapsed = true;
  isMenuCollapsed2 = true;
}
