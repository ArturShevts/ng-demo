import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as MessageActions from './message.actions';
import * as MessageSelectors from './message.selectors';

@Injectable()
export class MessageFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(MessageSelectors.selectMessageLoaded));
  // allMessage$ = this.store.pipe(select(MessageSelectors.selectAllMessage));
  selectedMessage$ = this.store.pipe(select(MessageSelectors.selectEntity));
  sessionDetails$ = this.store.pipe(select(MessageSelectors.selectSessionDetails));
  messageResponse$ = this.store.pipe(select(MessageSelectors.selectMessageResponse));
  messageError$ = this.store.pipe(select(MessageSelectors.selectMessageError));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  getSessionDetails() {
    this.store.dispatch(MessageActions.loadMessageSession());
  }

  searchByMessage(message: string) {
    this.store.dispatch(MessageActions.loadSearchByMessage(message));
  }

  clearSearchState() {
    this.store.dispatch(MessageActions.clearSearchMessageSession());
    this.store.dispatch(MessageActions.loadMessageSession());
  }

  init() {
    // this.store.dispatch(MessageActions.initMessage());
  }
}
