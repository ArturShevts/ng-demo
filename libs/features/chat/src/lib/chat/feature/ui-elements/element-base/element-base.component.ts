import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chat-element-base',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./element-base.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})

// type ElementDataType = Record<string, unknown>
export class ElementBaseComponent<T> implements OnInit {
  // constructor() {
  //  }

  @Input() elementData: T;

  @Output() elementEventEmitter = new EventEmitter<string>();
  // constructor() {}

  ngOnInit(): void {
    this.testElement();
  }

  emitElementEvent(event: string) {
    this.elementEventEmitter.emit(event);
  }

  testElement() {
    console.log('element class init');
  }
}
