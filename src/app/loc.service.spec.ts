import { TestBed, inject } from '@angular/core/testing';

import { LocService } from './loc.service';

describe('LocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocService]
    });
  });

  it('should be created', inject([LocService], (service: LocService) => {
    expect(service).toBeTruthy();
  }));
});
