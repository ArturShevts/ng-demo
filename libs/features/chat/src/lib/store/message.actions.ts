import { createAction, props } from '@ngrx/store';

export const loadMessageSession = createAction('[Search Message Page] Get MessageSession');

export const loadMessageSessionSuccess = createAction(
  '[Message/API] Load MessageSession Success',
  props<{ sessionDetails: any }>(),
);

export const loadMessageSessionFailure = createAction('[Message/API] Load MessageSession Failure', props<{ error: any }>());

export const loadSearchByMessage = createAction('[Search Message Page] Get SearchByMessage', (message: string) => ({
  message,
}));

export const loadSearchByMessageSuccess = createAction(
  '[Message/API] Load SearchByMessage Success',
  props<{ messageResponse: any }>(),
);

export const loadSearchByMessageFailure = createAction('[Message/API] Load SearchByMessage Failure', props<{ error: any }>());

export const clearSearchMessageSession = createAction('[Message/API] Clear Message Session');
