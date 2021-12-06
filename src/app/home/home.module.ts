import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';

// Directive
import { SlideEffectDirective } from './directives/slide-effect.directive';

// Service
import { AuthService } from './services/auth/auth.service';

// Module
import { ShopModule } from '../shop/shop.module';

// Component
import { HomeComponent } from './home.component';
import { HeaderModule } from '../shared/home-layout/header/header.module';
import { FooterModule } from '../shared/home-layout/footer/footer.module';
import { ShoppingCartComponent } from './page/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [SlideEffectDirective, HomeComponent, ShoppingCartComponent],
  providers: [AuthService],
  imports: [
    CommonModule,
    HttpClientModule,
    ShopModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule,
  ],
})
export class HomeModule {}
