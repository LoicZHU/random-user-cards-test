import { Injectable } from '@angular/core';
import { User } from '../../../../core/models/user/user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { UserResults } from '../../../../core/models/user/user-results.model';

@Injectable({
  providedIn: 'root',
})
export class UserCardsService {
  private readonly API_URL = 'https://randomuser.me/api';
  private readonly usersQuantity = 10;
  private readonly _users$ = new BehaviorSubject<null | User[]>(null);

  constructor(private readonly httpClient: HttpClient) {}

  get users(): null | User[] {
    return this._users$.getValue();
  }

  set users(users: null | User[]) {
    this._users$.next(users);
  }

  get users$(): Observable<null | User[]> {
    return this._users$.asObservable();
  }

  fetchUsers(quantity = this.usersQuantity): Observable<User[]> {
    return this.httpClient.get<UserResults>(`${this.API_URL}?results=${quantity}`).pipe(
      map((response) => [...(this.users || []), ...response.results]),
      map(this.getUsersOrderedByDateOfBirth),
      catchError(() => of([...(this.users || [])])),
    );
  }

  deleteUser(uuid: string): void {
    this.users = this.users?.filter((user) => user.login.uuid !== uuid) ?? [];
  }

  private getUsersOrderedByDateOfBirth(users: User[]): User[] {
    return users.sort((a, b) => {
      return new Date(a.dob.date).getTime() - new Date(b.dob.date).getTime();
    });
  }
}
