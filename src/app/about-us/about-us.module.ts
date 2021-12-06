import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../shared/home-layout/header/header.module';
import { FooterModule } from '../shared/home-layout/footer/footer.module';

const routes: Routes = [{ path: '', component: AboutUsComponent }];

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AboutUsModule {}
