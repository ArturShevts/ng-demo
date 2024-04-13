import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetSearchElementComponent } from './snippet-search-element.component';
import { SearchElementTextComponent } from '../components/search-element-text/search-element-text.component';

describe('SnippetSearchElementComponent', () => {
  let component: SnippetSearchElementComponent;
  let fixture: ComponentFixture<SnippetSearchElementComponent>;
  const snippetDataMock = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Snippet name',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetSearchElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SnippetSearchElementComponent);

    component = fixture.componentInstance;
    component.elementData = snippetDataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
