import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingCartComponent } from './shopping-cart.component';

import { HeaderModule } from '../shared/home-layout/header/header.module';
import { FooterModule } from '../shared/home-layout/footer/footer.module';

const routes: Routes = [{ path: '', component: ShoppingCartComponent }];

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ShoppingCartModule {}
