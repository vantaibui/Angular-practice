import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { AuthorizationGuard } from '../shared/helpers/authorization.guard';

// Components
import * as Component from './pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CategoriesComponent,
    canActivate: [AuthorizationGuard],
    children: [{ path: 'list', component: Component.CategoryListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
