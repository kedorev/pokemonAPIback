import { TestBed, inject } from '@angular/core/testing';

import { PokeApiService } from './poke-api.service';

describe('PokeApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeApiService]
    });
  });

  it('should be created', inject([PokeApiService], (service: PokeApiService) => {
    expect(service).toBeTruthy();
  }));
});
