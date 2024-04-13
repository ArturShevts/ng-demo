import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chat-element-text',
  standalone: true,
  imports: [CommonModule, BoxContainerModule],
  templateUrl: './search-element-text.component.html',
  styleUrls: ['./search-element-text.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SearchElementTextComponent {}
