import { Component, Input } from '@angular/core';
import { User } from '../../../../core/models/user/user.model';

@Component({
  selector: 'app-user-cards-list',
  templateUrl: './user-cards-list.component.html',
  styleUrls: ['./user-cards-list.component.scss'],
})
export class UserCardsListComponent {
  @Input() users?: null | User[];
}
