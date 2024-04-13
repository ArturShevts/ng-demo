import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.scss'],
})
export class SearchQuestionComponent {
  @Input() query: any[];
  // constructor() {}
  // ngOnInit(): void {}
}
