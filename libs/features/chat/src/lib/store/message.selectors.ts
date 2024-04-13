import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QUERY_FEATURE_KEY, MessageState, messageAdapter } from './message.reducer';

// Lookup the 'Message' feature state managed by NgRx
export const selectMessageState = createFeatureSelector<MessageState>(QUERY_FEATURE_KEY);

const { selectAll, selectEntities } = messageAdapter.getSelectors();

export const selectSessionDetails = createSelector(selectMessageState, (state: MessageState) => state.sessionDetails);

export const selectMessageLoaded = createSelector(selectMessageState, (state: MessageState) => state.loaded);

export const selectMessageError = createSelector(selectMessageState, (state: MessageState) => state.error);

export const selectAllMessage = createSelector(selectMessageState, (state: MessageState) => selectAll(state));

export const selectMessageEntities = createSelector(selectMessageState, (state: MessageState) => selectEntities(state));

export const selectSelectedId = createSelector(selectMessageState, (state: MessageState) => state.selectedId);

export const selectEntity = createSelector(selectMessageEntities, selectSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : undefined,
);

export const selectMessageResponse = createSelector(selectMessageState, (state: MessageState) => state.searchItems);
