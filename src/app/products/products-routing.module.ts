import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { AuthorizationGuard } from '../shared/helpers/authorization.guard';

// Component
import * as Component from './pages';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ProductsComponent,
    canActivate: [AuthorizationGuard],
    children: [{ path: 'list', component: Component.ProductListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingsModule {}
