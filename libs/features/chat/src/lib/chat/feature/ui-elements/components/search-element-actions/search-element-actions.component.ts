import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chat-element-actions',
  standalone: true,
  imports: [CommonModule, CTAModule, CTATextModule],
  templateUrl: './search-element-actions.component.html',
  styleUrls: ['./search-element-actions.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SearchElementActionsComponent {
  @Input() primaryBtnText = '';
  @Input() secondaryBtnText = '';
  @Input() tertiaryBtnText = '';
  // Disable properties (can't disable Cancel)
  @Input() disablePrimaryBtn = false;
  @Input() disableSecondaryBtn = false;
  // Btn actions
  @Output() primaryBtn: EventEmitter<void> = new EventEmitter<void>();
  @Output() secondaryBtn: EventEmitter<void> = new EventEmitter<void>();
  @Output() tertiaryBtn: EventEmitter<void> = new EventEmitter<void>();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public emitPrimaryBtnAction(): void {
    this.primaryBtn.emit();
  }

  public emitSecondaryBtnAction(): void {
    this.secondaryBtn.emit();
  }

  public emitTertiaryBtnAction(): void {
    this.tertiaryBtn.emit();
  }
}
