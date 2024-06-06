import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../../../core/models/user/user.model';
import { Gender } from '../../../../shared/enums/gender.enum';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-cards-list',
  templateUrl: './user-cards-list.component.html',
  styleUrls: ['./user-cards-list.component.scss'],
})
export class UserCardsListComponent implements OnInit, OnChanges {
  @Input() users?: null | User[];
  @Input() hasAddedUsers = false;

  filteredUsers?: null | User[];
  genderForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.genderForm = this.formBuilder.group({
      gender: [Gender.ALL],
    });
  }

  ngOnInit(): void {
    this.subscribeToGenderForm();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,unused-imports/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this.setFilteredUsers(this.users);

    if (this.hasAddedUsers) {
      this.resetUserFilter();
    }
  }

  private subscribeToGenderForm(): void {
    this.genderForm?.get('gender')?.valueChanges.subscribe((gender) => {
      this.filterUsersByGender(gender);
    });
  }

  private setFilteredUsers(users?: null | User[]): void {
    this.filteredUsers = users;
  }

  private resetUserFilter(): void {
    this.genderForm.patchValue({ gender: Gender.ALL });
  }

  filterUsersByGender(gender: Gender): void {
    if (this.isGenderAll(gender)) {
      this.setFilteredUsers(this.users);
      return;
    }

    const filteredUsers = this.users?.filter((user) => {
      return user.gender.toUpperCase() === gender.toUpperCase();
    });
    this.setFilteredUsers(filteredUsers);
  }

  private isGenderAll(gender: Gender): boolean {
    return gender === Gender.ALL;
  }
}
