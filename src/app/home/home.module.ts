import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';

// Directive
import { SlideEffectDirective } from './directives/slide-effect.directive';

// Service
import { AuthService } from './services/auth/auth.service';

// Page
import { HomeComponent } from './pages/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReviewComponent } from './pages/review/review.component';

const components = [
  HomeComponent,
  ShopComponent,
  AboutComponent,
  ReviewComponent,
  BlogsComponent,
  ContactComponent,
];

@NgModule({
  declarations: [SlideEffectDirective, ...components],
  providers: [AuthService],
  imports: [CommonModule, HttpClientModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
