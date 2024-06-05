import { Component, ViewChild, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatMenuTrigger, MatMenuModule} from '@angular/material/menu';
import {MatDialog,} from '@angular/material/dialog';
import { AuthService } from '../../services/Auth/auth.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserFooterComponent } from '../user-footer/user-footer.component';
import * as Aos from 'aos';


@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [ MatIconModule,MatMenuModule,RouterLink,MatTooltipModule,UserFooterComponent,RouterLinkActive,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,CommonModule,RouterOutlet],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent {
  authService = inject(AuthService);
  title = 'material-responsive-sidenav';
  @ViewChild(MatDrawer)
  sidenav!: MatDrawer;
  isMobile= true;

  isCollapsed = true;
  constructor(private observer: BreakpointObserver,public dialog: MatDialog) {}

  ngOnInit() {
    Aos.init()
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }


  ngAfterViewInit(): void {

      Aos.refresh(); // Re-initialize Aos to detect new elements
    
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }

  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger 


  logout() {
    this.authService.removerUser()
    }

}


