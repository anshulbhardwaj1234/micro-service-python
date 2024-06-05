import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyCssService {
  selectedtheme: any = "default";
  constructor() { }

  private increaseCount: number = 0;
  private decreaseCount: number = 0;
  private readonly maxIncreaseCount: number = 3;
  private readonly maxDecreaseCount: number = 3;

  base_font_size = 1.2;
  heading1_font_size = 1.5;
  heading2_font_size = 1.4;
  small_font_size = 1;

  increaseTextFontSize() {
    if (this.increaseCount < this.maxIncreaseCount) {
      this.base_font_size += 0.2
      this.heading1_font_size += 0.2
      this.heading2_font_size += 0.2
      this.small_font_size += 0.2
      this.adjustFontSize();
      this.increaseCount++;
    }
  }

  decreaseTextFontSize() {
    if (this.decreaseCount < this.maxDecreaseCount) {
      this.base_font_size -= 0.2
      this.heading1_font_size -= 0.2
      this.heading2_font_size -= 0.2
      this.small_font_size -= 0.2
      this.adjustFontSize();
      this.decreaseCount++;
    }
  }

  resetFontSize() {
    this.adjustFontSize();
    this.increaseCount = 0
    this.decreaseCount = 0
    this.base_font_size = 1.2;
    this.heading1_font_size = 1.5;
    this.heading2_font_size = 1.4;
    this.small_font_size = 1;// Reset to default sizes
  }

  private adjustFontSize() {
    const root = document.documentElement;
    root.style.setProperty("--base-font-size", `${this.base_font_size}rem`);
    root.style.setProperty("--heading1-font-size", `${this.heading1_font_size}rem`);
    root.style.setProperty("--heading2-font-size", `${this.heading2_font_size}rem`);
    root.style.setProperty("--small-font-size", `${this.small_font_size}rem`);
    alert(root.style.getPropertyValue("--heading1-font-size"))
  }



}
