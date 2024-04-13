import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chat-loading-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoadingAnimationComponent {}
