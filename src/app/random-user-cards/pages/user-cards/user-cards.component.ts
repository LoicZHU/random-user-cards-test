import { Component, OnInit } from '@angular/core';
import { UserCardsService } from './services/user-cards.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, tap } from 'rxjs';
import { User } from '../../../core/models/user/user.model';

@UntilDestroy()
@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss'],
})
export class UserCardsComponent implements OnInit {
  users$?: Observable<null | User[]>;
  isFetching = false;
  hasAddedUsers = false;
  userQuantityToAdd = 10;

  constructor(private readonly userCardsService: UserCardsService) {}

  ngOnInit(): void {
    this.subscribeToUsers$();
    this.fetchUsers(2);
  }

  private fetchUsers(userQuantity: number): void {
    if (this.areUsersNullOrEmpty(this.userCardsService.users)) {
      this.setIsFetching(true);

      this.userCardsService
        .fetchUsers(userQuantity)
        .pipe(
          tap((users) => {
            this.setUsers(users);
            this.setHasAddedUsers(false);
            this.setIsFetching(false);
          }),
          untilDestroyed(this),
        )
        .subscribe();
    }
  }

  private setIsFetching(value: boolean): void {
    this.isFetching = value;
  }

  private setUsers(users: User[]): void {
    this.userCardsService.users = users;
  }

  private areUsersNullOrEmpty(users: null | User[]): boolean {
    return !users || users?.length === 0;
  }

  private subscribeToUsers$(): void {
    this.users$ = this.userCardsService.users$;
  }

  onAddUsers(userQuantity: number): void {
    this.userCardsService
      .fetchUsers(userQuantity)
      .pipe(
        tap(() => {
          this.setIsFetching(true);
        }),
        untilDestroyed(this),
      )
      .subscribe((users) => {
        this.setUsers(users);
        this.setHasAddedUsers(true);
        this.setIsFetching(false);
      });
  }

  private setHasAddedUsers(value: boolean): void {
    this.hasAddedUsers = value;
  }
}
