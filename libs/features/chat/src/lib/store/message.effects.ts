import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

 import * as MessageActions from './message.actions';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
 import { of } from 'rxjs';
import { MessageFacade } from './message.facade';

@Injectable()
export class MessageEffects {
  private actionsStream$ = inject(Actions);
  private messageService = inject(MessageFlowService);
  private appStoreFacade = inject(AppStoreFacade);
  private messageFacade = inject(MessageFacade);

  startSearchSession$ = createEffect(() =>
    this.actionsStream$.pipe(
      ofType(MessageActions.loadMessageSession.type),
      withLatestFrom(this.appStoreFacade.clientCardNumber$()),
      switchMap(([action, SRF]) => {
        const body: MessageStart = {
          channel: {
            name: 'OLB',
            options: {
              channelData: SRF,
            },
          },
        };
        return this.messageService.getMessageSession$Response({ body: body }).pipe(
          map(({ status, body }) => {
            if (Math.trunc(status / 100) !== 2) {
              throw new Error('Error loading Search Session Details');
            }
            return MessageActions.loadMessageSessionSuccess({ sessionDetails: body });
          }),
          catchError((error: unknown) => {
            return of(MessageActions.loadMessageSessionFailure({ error }));
          }),
        );
      }),
    ),
  );

  searchByMessage$ = createEffect(() =>
    this.actionsStream$.pipe(
      ofType(MessageActions.loadSearchByMessage.type),
      withLatestFrom(this.messageFacade.sessionDetails$), // is this the best way to do this?
      switchMap(([message, sessionDetails]) => {
        if (!sessionDetails?.sessionId) throw new Error('Error loading Search Session Details');
        const body: Message = {
          message: message.message,
          sessionId: sessionDetails.sessionId,
        };
        return this.messageService.getMessageResult$Response({ body: body }).pipe(
          map(({ status, body }) => {
            if (Math.trunc(status / 100) !== 2) {
              throw new Error('Error loading Message Search Response');
            }

            return MessageActions.loadSearchByMessageSuccess({ messageResponse: body });
          }),
          catchError((error: unknown) => {
            return of(MessageActions.loadSearchByMessageFailure({ error }));
          }),
        );
      }),
    ),
  );
}
