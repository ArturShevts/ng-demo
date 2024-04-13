import { TestBed } from '@angular/core/testing';

import { MessageFlowService } from './message-flow.service';

describe('MessageFlowService', () => {
  let service: MessageFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
