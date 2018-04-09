import { TestBed, inject } from '@angular/core/testing';

import { ChasingCoinsService } from './chasing-coins.service';

describe('ChasingCoinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChasingCoinsService]
    });
  });

  it('should be created', inject([ChasingCoinsService], (service: ChasingCoinsService) => {
    expect(service).toBeTruthy();
  }));
});
