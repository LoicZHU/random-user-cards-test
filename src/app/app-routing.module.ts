import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'random-user-cards',
    loadChildren: () =>
      import('./random-user-cards/random-user-cards.module').then(
        (m) => m.RandomUserCardsModule,
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./random-user-cards/pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
