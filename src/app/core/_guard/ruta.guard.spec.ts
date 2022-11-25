import { TestBed } from '@angular/core/testing';

import { RutaGuard } from './ruta.guard';

describe('RutaGuard', () => {
  let guard: RutaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RutaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
