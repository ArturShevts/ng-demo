import { ActivatedRoute, Router } from '@angular/router';
import { SearchPersonalComponent } from './search-personal.component';
 import { of } from 'rxjs';
import { QueryFacade } from '../+state/query.facade';

const localizedLinksServiceMock: LocalizedLinksService = {
  getLink: jest.fn(),
} as unknown as LocalizedLinksService;

const localeServiceMock = {
  isEnglish: () => jest.fn(),
  isFrench: () => jest.fn(),
} as any;

const routerMock = { navigate: jest.fn() } as unknown as Router;
const queryFacadeMock = {
  getSessionDetails: jest.fn(),
  queryResponse$: jest.fn(),
} as unknown as QueryFacade;
const activatedRouteMock = {
  queryParams: of({}),
} as unknown as ActivatedRoute;

describe('SearchPersonalComponent', () => {
  let component: SearchPersonalComponent;

  beforeEach(async () => {
    component = new SearchPersonalComponent(
      localizedLinksServiceMock,
      localeServiceMock,
      routerMock,
      activatedRouteMock,
      queryFacadeMock,
    );
    // component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
