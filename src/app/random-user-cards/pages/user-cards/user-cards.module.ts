import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardsRoutingModule } from './user-cards-routing.module';
import { UserCardsComponent } from './user-cards.component';
import { RandomUserCardsModule } from '../../random-user-cards.module';

@NgModule({
  declarations: [UserCardsComponent],
  imports: [CommonModule, UserCardsRoutingModule, RandomUserCardsModule],
})
export class UserCardsModule {}
