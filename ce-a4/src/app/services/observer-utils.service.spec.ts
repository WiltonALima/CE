import { TestBed, inject } from '@angular/core/testing';

import { ObserverUtilsService } from './observer-utils.service';

describe('ObserverUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObserverUtilsService]
    });
  });

  it('should be created', inject([ObserverUtilsService], (service: ObserverUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
