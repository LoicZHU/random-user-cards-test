import { TestBed } from '@angular/core/testing';

import { UserCardsService } from './user-cards.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';

describe('UserCardsService', () => {
  let service: UserCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserCardsService, DatePipe],
    });
    service = TestBed.inject(UserCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
