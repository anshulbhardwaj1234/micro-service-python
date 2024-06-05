import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
// import { BeforeLoginHeaderComponent } from './before-login-header/before-login-header.component';
import { AuthService } from './services/Auth/auth.service';
import Aos from 'aos';
import { WebEditorHeaderComponent } from './web-editor-header/web-editor-header.component';

// import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { BeforeLoginHeaderComponent } from './publicPages/before-login-header/before-login-header.component';
import { FooterComponent } from './publicPages/footer/footer.component';
import { DashboardComponent } from './userDashboard/dashboard/dashboard.component';
import { UserHeaderComponent } from './userDashboard/user-header/user-header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxUiLoaderModule,UserHeaderComponent, BeforeLoginHeaderComponent,WebEditorHeaderComponent,FooterComponent,MatIconModule,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Ginie';

  constructor(private Auth:AuthService) {  }
  auth = this.Auth
  ngOnInit() {     
    Aos.init();
    window.scrollTo({
      top: 1,
      behavior: 'smooth'
    });
  }

  showScrollButton = false

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 100;
  }

  scrollToTop() {
    (function smoothscroll() {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    })();
  }

  isAtTop(): boolean {
    return (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) === 0;
  }
}
