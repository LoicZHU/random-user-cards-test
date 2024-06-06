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
  quantityUsersToAdd = 10;

  constructor(private readonly userCardsService: UserCardsService) {}

  ngOnInit(): void {
    this.subscribeToUsers$();
    this.fetchUsers();
  }

  private fetchUsers(): void {
    if (this.areUsersNullOrEmpty()) {
      this.userCardsService
        .fetchUsers(2)
        .pipe(
          tap(() => {
            this.isFetching = true;
          }),
          untilDestroyed(this),
        )
        .subscribe((users) => {
          this.isFetching = false;
          this.setUsers(users);
        });
    }
  }

  private setUsers(users: User[]): void {
    this.userCardsService.users = users;
  }
  private areUsersNullOrEmpty(): boolean {
    return !this.userCardsService.users || this.userCardsService.users?.length === 0;
  }

  private subscribeToUsers$(): void {
    this.users$ = this.userCardsService.users$;
  }

  onAddUsers(quantityUsersToAdd: number): void {
    this.userCardsService
      .fetchUsers(quantityUsersToAdd)
      .pipe(
        tap(() => {
          this.isFetching = true;
        }),
        untilDestroyed(this),
      )
      .subscribe((users) => {
        this.isFetching = false;
        this.setUsers(users);
      });
  }
}
