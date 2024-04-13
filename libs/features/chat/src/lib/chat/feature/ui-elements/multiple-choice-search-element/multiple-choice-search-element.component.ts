import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ElementBaseComponent } from '../element-base/element-base.component';

@Component({
  selector: 'chat-app-multiple-choice-search-element',
  standalone: true,
  imports: [CommonModule, RadioButtonModule, BoxContainerModule],
  templateUrl: './multiple-choice-search-element.component.html',
  styleUrls: ['./multiple-choice-search-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class MultipleChoiceSearchElementComponent extends ElementBaseComponent<string[]> implements OnInit {
  @Input() disabled = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.testElement();
  }

  submitSelection(event: string) {
    this.emitElementEvent(event);
    this.disabled = true;
  }
}
