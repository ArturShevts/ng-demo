import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as MessageActions from './message.actions';
import { MessageEntity, SearchItem } from './message.models';

export const QUERY_FEATURE_KEY = 'message';

export interface MessageState extends EntityState<MessageEntity> {
  selectedId?: string | number;
  searchItems?: SearchItem[];
  sessionDetails?: any;
  loaded: boolean;
  error?: string | null;
}

export interface MessagePartialState {
  readonly [QUERY_FEATURE_KEY]: MessageState;
}

export const messageAdapter: EntityAdapter<MessageEntity> = createEntityAdapter<MessageEntity>();

export const initialMessageState: MessageState = messageAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialMessageState,
  on(MessageActions.clearSearchMessageSession, () => initialMessageState),
  on(MessageActions.loadMessageSession, (state) => ({ ...state, loaded: false, error: null })),
  on(MessageActions.loadMessageSessionSuccess, (state, { sessionDetails }) => ({
    ...state,
    loaded: true,
    sessionDetails: sessionDetails,
  })),
  on(MessageActions.loadMessageSessionFailure, (state, { error }) => ({ ...state, error })),
  on(MessageActions.loadSearchByMessage, (state, { message }) => {
    const messageItem: SearchItem = { message: message, isResponse: false, ts: Date.now() };
    return {
      ...state,
      loaded: false,
      error: null,
      searchItems: state.searchItems ? [...state.searchItems, messageItem] : [messageItem],
    };
  }),
  on(MessageActions.loadSearchByMessageSuccess, (state, { messageResponse }) => {
    const responseItem: SearchItem = { response: messageResponse, isResponse: true, ts: Date.now() };

    return {
      ...state,
      loaded: true,
      searchItems: state.searchItems ? [...state.searchItems, responseItem] : [responseItem],
    };
  }),
  on(MessageActions.loadSearchByMessageFailure, (state, { error }) => {
    const responseItem: SearchItem = { error: error, isResponse: true, ts: Date.now() };

    return {
      ...state,
      loaded: true,
      searchItems: state.searchItems ? [...state.searchItems, responseItem] : [responseItem],
    };
  }),
);

export function messageReducer(state: MessageState | undefined, action: Action) {
  return reducer(state, action);
}
