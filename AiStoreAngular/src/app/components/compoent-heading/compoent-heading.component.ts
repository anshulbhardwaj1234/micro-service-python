import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compoent-heading',
  standalone: true,
  imports: [],
  templateUrl: './compoent-heading.component.html',
  styleUrl: './compoent-heading.component.css'
})
export class CompoentHeadingComponent {
  @Input({required: true}) title = "";
  @Input({required: true}) description = "";
}
