import { TestBed } from '@angular/core/testing';

import { AuctionsListService } from './auctions-list.service';

describe('AuctionsListService', () => {
  let service: AuctionsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
