import { TestBed } from '@angular/core/testing';

import { UserCardsService } from './user-cards.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { User } from '../../../../core/models/user/user.model';

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

  it('should delete a user by UUID', () => {
    // Arrange
    service.users = [
      { login: { uuid: '1' }, dob: { date: '2000-01-01T00:00:00Z' } } as User,
      { login: { uuid: '2' }, dob: { date: '2000-02-01T00:00:00Z' } } as User,
      { login: { uuid: '3' }, dob: { date: '2000-02-01T00:00:00Z' } } as User,
    ];
    const uuidToDelete = '2';

    // Act
    service.deleteUser(uuidToDelete);

    // Assert
    const updatedUsers = service.users;
    expect(updatedUsers?.length).toEqual(2);
    expect(
      updatedUsers?.find((user) => user.login.uuid === uuidToDelete),
    ).toBeUndefined();
  });
});
