import { TestBed } from '@angular/core/testing';

import { DecoData } from './deco-data';

describe('DecoData', () => {
  let service: DecoData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecoData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
