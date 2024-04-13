import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chat-error',
  standalone: true,
  imports: [CommonModule, IconModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ErrorComponent {
  // constructor() {}
  //
  // ngOnInit(): void {}
}
