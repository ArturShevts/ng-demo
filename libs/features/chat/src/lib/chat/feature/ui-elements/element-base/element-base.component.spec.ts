import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBaseComponent } from './element-base.component';

describe('ElementBaseComponent', () => {
  let component: ElementBaseComponent<string>;
  let fixture: ComponentFixture<ElementBaseComponent<string>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElementBaseComponent<string>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
