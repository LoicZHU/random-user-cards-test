import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomUserCardsComponent } from './random-user-cards.component';

const routes: Routes = [
  {
    path: '',
    component: RandomUserCardsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/user-cards/user-cards.module').then((m) => m.UserCardsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomUserCardsRoutingModule {}
