import { TestBed } from '@angular/core/testing';

import { SomeServiveService } from './some-servive.service';

describe('SomeServiveService', () => {
  let service: SomeServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
