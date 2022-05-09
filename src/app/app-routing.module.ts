import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { CardComponent } from './card-grid/card/card.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cards',
  },
  {
    path: 'cards',
    component: CardGridComponent,
  },
  {
    path: 'cards/:id',
    component: AnimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
