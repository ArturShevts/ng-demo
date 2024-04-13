import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import { LocaleService } from '@core-banking/shared-ui-module';
 import { QueryFacade } from '../+state/query.facade';
import { SEARCH_ID_TYPE } from '../model/constants.model';
import { ActivatedRoute, Router } from '@angular/router';
import {delay, map, startWith, tap } from 'rxjs/operators';

 import {Observable, Subscription} from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'chat-personal',
  templateUrl: './search-personal.component.html',
  styleUrls: ['./search-personal.component.scss'],
})
export class SearchPersonalComponent implements OnInit, OnDestroy {
  @ViewChild('resultsContainer') private resultsContainer: ElementRef;
  @ViewChildren('responseWrapper') private responseWrapper: QueryList<ElementRef>;
  intelliResponseUrl = '';
  searchText = '';
  responseArr$: Observable<SearchItem[] | undefined>;
  activate = false;
  fgSearch: FormGroup = new FormGroup({ search: new FormControl('', []) });
  startQueryError$: Observable<any>;
  loadingResponse$: Observable<any>;
  subscriptions = new Subscription();

  constructor(
    private localizedLink: LocalizedLinksService,
    private localeService: LocaleService,
    private router: Router,
    private route: ActivatedRoute,
    private queryFacade: QueryFacade,
  ) {}

  ngOnInit(): void {
    this.responseArr$ = this.queryFacade.queryResponse$.pipe(
      startWith([]),
    );
    this.subscriptions.add(
      this.responseArr$.pipe(
        delay(300),
        tap(() => this.scrollToLatestQuery())
      ).subscribe()
    );
    this.loadingResponse$ = this.queryFacade.loaded$.pipe(map((loaded) => !loaded));
    this.startQueryError$ = this.queryFacade.queryError$.pipe(startWith([]));
    this.intelliResponseUrl = this.localizedLink.getLink('intelliResponse');
    this.queryFacade.getSessionDetails();
  }

  search(input: any) {
    // this.scrollToBottom();
    this.queryFacade.searchByQuery(input);
    this.activate = true;
    this.fgSearch.reset();
  }

  onBack(): void {
    this.activate = false;
    this.queryFacade.clearSearchState();
  }

  private composeLink($value: string): string {
    const searchId: SEARCH_ID_TYPE = this.localeService.isEnglish()
      ? SEARCH_ID_TYPE.PERSONAL_ID_EN
      : SEARCH_ID_TYPE.PERSONAL_ID_FR;
    return `${this.intelliResponseUrl}?IR_INTERFACE_ID=${searchId}&question=${encodeURIComponent($value)}`;
  }

  scrollToLatestQuery(): void {
    this.msgWrapper?.last?.nativeElement?.scrollIntoView();
  };

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
