import { TestBed } from '@angular/core/testing';

import { PrestashopService } from './prestashop.service';

describe('PrestashopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrestashopService = TestBed.get(PrestashopService);
    expect(service).toBeTruthy();
  });
});
