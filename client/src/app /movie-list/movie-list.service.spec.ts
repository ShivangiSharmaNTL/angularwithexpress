import { TestBed, inject } from '@angular/core/testing';
import { MovieListService } from './movie-list.service';
describe('MovieListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieListService]
    });
  });

  it('should be created', inject([MovieListService], (service: MovieListService) => {
    expect(service).toBeTruthy();
  }));
});
