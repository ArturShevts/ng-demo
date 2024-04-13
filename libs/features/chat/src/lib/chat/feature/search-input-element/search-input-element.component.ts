import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { Simulate } from 'react-dom/test-utils';
import submit = Simulate.submit;
import { ElementBaseComponent } from '../ui-elements/element-base/element-base.component';

@Component({
  selector: 'chat-input-element',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarModule,
    InputModule,
    FormLabelModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    FormIconClearComponent,
    ButtonsModule,
    CTAModule,
  ],
  templateUrl: './search-input-element.component.html',
  styleUrls: ['./search-input-element.component.scss']
})
export class SearchInputElementComponent {
  @Input() fgSearch: FormGroup;
  @Input() isSearch: boolean;

  @Output() fcEventEmitter = new EventEmitter<string>();

  submit(event: string) {
    if (event) {
      this.fcEventEmitter.emit(event);
    }
  }

  clear() {
    this.fgSearch.reset();
  }
}
