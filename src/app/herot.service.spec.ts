import { TestBed } from '@angular/core/testing';

import { HerotService } from './herot.service';

describe('HerotService', () => {
  let service: HerotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
