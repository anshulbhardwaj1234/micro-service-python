import { TestBed } from '@angular/core/testing';

import { ModifyCssService } from './modify-css.service';

describe('ModifyCssService', () => {
  let service: ModifyCssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyCssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
