import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardItemComponent } from './user-card-item.component';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserCardsService } from '../../../pages/user-cards/services/user-cards.service';

describe('UserCardItemComponent', () => {
  let component: UserCardItemComponent;
  let fixture: ComponentFixture<UserCardItemComponent>;
  let userCardsService: UserCardsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardItemComponent],
      imports: [HttpClientTestingModule],
      providers: [DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardItemComponent);
    component = fixture.componentInstance;
    userCardsService = TestBed.inject(UserCardsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteUser on UserCardsService with the correct UUID', () => {
    // Arrange
    const uuid = '1234-5678-91011';
    spyOn(userCardsService, 'deleteUser').and.callThrough();

    // Act
    component.onDeleteUser(uuid);

    // Assert
    expect(userCardsService.deleteUser).toHaveBeenCalledWith(uuid);
  });
});
