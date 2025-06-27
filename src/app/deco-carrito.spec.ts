import { TestBed } from '@angular/core/testing';

import { DecoCarrito } from './deco-carrito';

describe('DecoCarrito', () => {
  let service: DecoCarrito;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecoCarrito);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
