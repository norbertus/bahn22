import { TestBed, inject } from '@angular/core/testing';

import { LocationDataproviderService } from './location-dataprovider.service';

describe('LocationDataproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationDataproviderService]
    });
  });

  it('should be created', inject([LocationDataproviderService], (service: LocationDataproviderService) => {
    expect(service).toBeTruthy();
  }));
});
