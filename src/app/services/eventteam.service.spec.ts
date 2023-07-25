import { TestBed } from '@angular/core/testing';

import { EventteamService } from './eventteam.service';

describe('EventteamService', () => {
  let service: EventteamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventteamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
