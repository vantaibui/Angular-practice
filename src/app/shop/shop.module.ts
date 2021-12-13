import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';

import { MaterialModule } from '../shared/material/material.module';
import { HeaderModule } from '../shared/home-layout/header/header.module';
import { FooterModule } from '../shared/home-layout/footer/footer.module';

// Component
import * as Component from './pages';

@NgModule({
  declarations: [
    ShopComponent,
    Component.IndexComponent,
    Component.ProductDetailComponent,
    Component.CategoryDetailComponent,
    Component.CheckSignInComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MaterialModule,
    ShopRoutingModule,
  ],
})
export class ShopModule {}
