import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { IndexComponent } from './pages/index/index.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  { path: 'shop', redirectTo: 'shop', pathMatch: 'full' },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'categories/:id', component: CategoryDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
