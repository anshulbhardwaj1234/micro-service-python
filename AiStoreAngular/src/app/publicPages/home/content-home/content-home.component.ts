import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-content-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-home.component.html',
  styleUrl: './content-home.component.css'
})
export class ContentHomeComponent {
  scrollPosition = 0
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollPosition = window.scrollY
  }

  getParallaxStyle() {
    return {
      'background-position': `50% calc(50% - ${0.1 * this.scrollPosition}px)` // Adjust the multiplier for intensity
    };
  }
}
