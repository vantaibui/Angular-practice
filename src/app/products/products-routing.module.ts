import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { AuthorizationGuard } from '../shared/helpers/authorization.guard';

export const routes: Routes = [
  {
    path: 'admin/products',
    redirectTo: 'admin/products/list',
    pathMatch: 'full',
  },
  {
    path: 'admin/products',
    component: ProductsComponent,
    canActivate: [AuthorizationGuard],
    children: [
      { path: 'list', component: ProductListComponent },
      { path: 'addProduct', component: AddProductComponent },
      { path: 'editProduct/:id', component: UpdateProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingsModule {}
