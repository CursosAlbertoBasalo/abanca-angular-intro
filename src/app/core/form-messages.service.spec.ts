import { TestBed } from '@angular/core/testing';

import { FormMessagesService } from './form-messages.service';

describe('FormMessagesService', () => {
  let service: FormMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
