import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { HeaderModule } from '../shared/home-layout/header/header.module';
import { FooterModule } from '../shared/home-layout/footer/footer.module';
import { IndexComponent } from './pages/index/index.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    ShopComponent,
    IndexComponent,
    ProductDetailComponent,
    CategoryDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ShopRoutingModule,
    HeaderModule,
    FooterModule,
  ],
})
export class ShopModule {}
