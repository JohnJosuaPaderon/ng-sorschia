import { TestBed } from '@angular/core/testing';

import { SorschiaService } from './sorschia.service';

describe('SorschiaService', () => {
  let service: SorschiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorschiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
