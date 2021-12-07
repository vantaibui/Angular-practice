import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';

import { HeaderModule } from '../shared/home-layout/header/header.module';
import { FooterModule } from '../shared/home-layout/footer/footer.module';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ShoppingCartRoutingModule,
    HeaderModule,
    FooterModule,
  ],
})
export class ShoppingCartModule {}
