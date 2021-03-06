import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';

// Directive
import { SlideEffectDirective } from './directives/slide-effect.directive';

// Component
import { HomeComponent } from './home.component';
import { HeaderModule } from '../shared/home-layout/header/header.module';
import { FooterModule } from '../shared/home-layout/footer/footer.module';
import { IndexComponent } from './page/index.component';

@NgModule({
  declarations: [SlideEffectDirective, HomeComponent, IndexComponent],
  providers: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule,
  ],
})
export class HomeModule {}
