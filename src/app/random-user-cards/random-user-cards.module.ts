import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RandomUserCardsRoutingModule } from './random-user-cards-routing.module';
import { UserCardsListComponent } from './components/user-cards/user-cards-list/user-cards-list.component';
import { UserCardItemComponent } from './components/user-cards/user-card-item/user-card-item.component';
import { RandomUserCardsComponent } from './random-user-cards.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserCardsListComponent, UserCardItemComponent, RandomUserCardsComponent],
  imports: [CommonModule, RandomUserCardsRoutingModule, ReactiveFormsModule],
  exports: [UserCardsListComponent],
  providers: [DatePipe],
})
export class RandomUserCardsModule {}
