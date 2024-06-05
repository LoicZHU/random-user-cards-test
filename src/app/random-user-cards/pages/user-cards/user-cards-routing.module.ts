import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCardsComponent } from './user-cards.component';

const routes: Routes = [
  {
    path: '',
    component: UserCardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCardsRoutingModule {}
