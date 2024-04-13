import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-answer',
  templateUrl: './search-answer.component.html',
  styleUrls: ['./search-answer.component.scss'],
})
export class SearchAnswerComponent {
  @Input() response: any;
  // constructor() {}
  // ngOnInit(): void {}
}
