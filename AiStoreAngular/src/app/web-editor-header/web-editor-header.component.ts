import { Component, Renderer2, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ModifyCssService } from '../services/CssChanger/modify-css.service';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-web-editor-header',
  standalone: true,
  imports: [NgbCollapseModule, RouterLink, MatTooltipModule, MatIconModule],
  templateUrl: './web-editor-header.component.html',
  styleUrl: './web-editor-header.component.css',
})
export class WebEditorHeaderComponent {
  isMenuCollapsed = true;
  constructor(private readonly renderer: Renderer2) {}
  CssEditor = inject(ModifyCssService);
  
  changeTheme(theme: any): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(
      'theme-black-white',
      'theme-dark',
      'theme-default',
    );
    this.renderer.addClass(body, `theme-${theme}`);
  }
  DecreaseFontSize() {
    this.CssEditor.decreaseTextFontSize();
  }
  ResetFontSize() {
    this.CssEditor.resetFontSize();
  }
  increaseFontSize() {
    this.CssEditor.increaseTextFontSize();
  }
}
