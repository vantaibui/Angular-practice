import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { ShopComponent } from './shop.component';
import * as Component from './pages';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      { path: '', component: Component.IndexComponent },
      { path: 'products/:id', component: Component.ProductDetailComponent },
      { path: 'categories/:id', component: Component.CategoryDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
