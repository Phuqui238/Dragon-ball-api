import { TestBed } from '@angular/core/testing';

import { GokuService } from './goku.service';

describe('GokuService', () => {
  let service: GokuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GokuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
