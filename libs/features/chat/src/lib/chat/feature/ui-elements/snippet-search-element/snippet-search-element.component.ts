import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementBaseComponent } from '../element-base/element-base.component';
import { SearchElementTextComponent } from '../components/search-element-text/search-element-text.component';
import { SearchAnswerComponent } from '../../search-answer/search-answer.component';
import { QueryResponse } from '@chat-app/shared/api/search';
import { Snippet } from '../../utils/models';

@Component({
  selector: 'chat-app-snippet-search-element',
  standalone: true,
  imports: [CommonModule, SearchElementTextComponent],
  templateUrl: './snippet-search-element.component.html',
  styleUrls: ['./snippet-search-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
// export type data =  QueryResponse['data']
export class SnippetSearchElementComponent extends ElementBaseComponent<Snippet> implements OnInit {
  // data :  QueryResponse['data']
  constructor() {
    super();
    // this.data = {snippet:this.elementData}
  }

  ngOnInit(): void {
    super.testElement();
  }
}
