import { Component, Input } from '@angular/core';
import { User } from '../../../../core/models/user/user.model';
import { UserIcon } from '../../../../shared/enums/user-icon.enum';
import { DatePipe } from '@angular/common';
import { UserCardsService } from '../../../pages/user-cards/services/user-cards.service';

@Component({
  selector: 'app-user-card-item',
  templateUrl: './user-card-item.component.html',
  styleUrls: ['./user-card-item.component.scss'],
})
export class UserCardItemComponent {
  @Input() user?: User;

  readonly userIcon = UserIcon;
  isPersonIconHovered = false;
  currentHoveredIcon = UserIcon.PERSON;
  textPrefix = '';
  textContent = '';

  constructor(
    private readonly datePipe: DatePipe,
    private readonly userCardsService: UserCardsService,
  ) {}

  ngOnInit(): void {
    if (this.user) {
      this.setIsPerconIconHovered(true);
      this.setUserCard(
        UserIcon.PERSON,
        'Hi, my name is',
        `${this.user.name.first} ${this.user.name.last}`,
      );
    }
  }

  private setIsPerconIconHovered(value: boolean): void {
    this.isPersonIconHovered = value;
  }

  private setUserCard(
    hoveredIcon: UserIcon,
    prefix: string,
    content?: null | string,
  ): void {
    this.currentHoveredIcon = hoveredIcon;
    this.textPrefix = prefix;
    this.textContent = content || '';
  }

  onIconHover(icon: UserIcon): void {
    switch (icon) {
      case UserIcon.ADDRESS:
        this.setUserCard(
          UserIcon.ADDRESS,
          'My address is',
          `${this.user?.location.city}, ${this.user?.location.country}`,
        );
        break;
      case UserIcon.DATE_OF_BIRTH:
        this.setUserCard(
          UserIcon.DATE_OF_BIRTH,
          'My birthday is',
          this.getFormattedDate(this.user?.dob?.date),
        );
        break;
      case UserIcon.EMAIL:
        this.setUserCard(UserIcon.EMAIL, 'My email address is', this.user?.email);
        break;
      case UserIcon.PASSWORD:
        this.setUserCard(UserIcon.PASSWORD, 'My password is', this.user?.login.password);
        break;
      case UserIcon.PHONE_NUMBER:
        this.setUserCard(UserIcon.PHONE_NUMBER, 'My phone number is', this.user?.phone);
        break;
      default:
        this.setUserCard(
          UserIcon.PERSON,
          'Hi, my name is',
          `${this.user?.name.first} ${this.user?.name.last}`,
        );
    }
  }

  private getFormattedDate(date?: string): string | null {
    return this.datePipe.transform(date, 'M/d/yyyy');
  }

  onDeleteUser(uuid: string): void {
    this.userCardsService.deleteUser(uuid);
  }
}
