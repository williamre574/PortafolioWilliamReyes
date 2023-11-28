import { TestBed } from '@angular/core/testing';

import { DowloandService } from './dowloand.service';

describe('DowloandService', () => {
  let service: DowloandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DowloandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
