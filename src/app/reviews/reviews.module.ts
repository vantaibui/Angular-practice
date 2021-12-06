import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsComponent } from './reviews.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../shared/home-layout/header/header.module';
import { FooterModule } from '../shared/home-layout/footer/footer.module';

const routes: Routes = [{ path: '', component: ReviewsComponent }];
@NgModule({
  declarations: [ReviewsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ReviewsModule {}
