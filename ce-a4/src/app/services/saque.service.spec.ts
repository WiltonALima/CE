import { TestBed, inject } from '@angular/core/testing';

import { SaqueService } from './saque.service';

describe('SaqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaqueService]
    });
  });

  it('should be created', inject([SaqueService], (service: SaqueService) => {
    expect(service).toBeTruthy();
  }));
});
