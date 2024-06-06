import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardsListComponent } from './user-cards-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../../core/models/user/user.model';
import { Gender } from '../../../../shared/enums/gender.enum';

describe('UserCardsListComponent', () => {
  let component: UserCardsListComponent;
  let fixture: ComponentFixture<UserCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardsListComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('filterUsersByGender', () => {
    const users: User[] = [
      { gender: 'male', name: { first: 'John', last: 'Doe' } } as User,
      { gender: 'female', name: { first: 'Jane', last: 'Doe' } } as User,
      { gender: 'male', name: { first: 'Jim', last: 'Beam' } } as User,
    ];

    beforeEach(() => {
      component.users = users;
    });

    it('should filter users by male gender', () => {
      // Act
      component.filterUsersByGender(Gender.MALE);

      // Assert
      expect(component.filteredUsers?.length).toEqual(2);
      expect(component.filteredUsers).toEqual([users[0], users[2]]);
    });

    it('should filter users by female gender', () => {
      // Act
      component.filterUsersByGender(Gender.FEMALE);

      // Assert
      expect(component.filteredUsers?.length).toEqual(1);
      expect(component.filteredUsers).toEqual([users[1]]);
    });

    it('should set all users when gender is all', () => {
      // Act
      component.filterUsersByGender(Gender.ALL);

      // Assert
      expect(component.filteredUsers).toEqual(users);
    });
  });
});
