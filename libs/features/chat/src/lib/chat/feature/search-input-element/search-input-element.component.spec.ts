import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputElementComponent } from './search-input-element.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('SearchInputElementComponent', () => {
  let component: SearchInputElementComponent;
  let fixture: ComponentFixture<SearchInputElementComponent>;
  const fgSearchMock = new FormGroup({
    search: new FormControl(''),
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInputElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchInputElementComponent);
    component = fixture.componentInstance;
    component.fgSearch = fgSearchMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
