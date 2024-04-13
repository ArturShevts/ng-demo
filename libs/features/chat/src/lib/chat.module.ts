import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {MessageFacade} from "./store/message.facade";
import {MessageEffects} from "./store/message.effects";
import * as fromMessage from './store/message.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMessage.MESSAGE_FEATURE_KEY, fromMessage.messageReducer),
    EffectsModule.forFeature([MessageEffects]),
  ],
  providers: [MessageFacade],
})
export class ChatModule {}
