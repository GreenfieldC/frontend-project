import { TestBed } from '@angular/core/testing';

import { SaverecipeService } from './saverecipe.service';

describe('SaverecipeService', () => {
  let service: SaverecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaverecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
