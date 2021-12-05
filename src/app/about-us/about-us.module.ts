import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'about-us', component: AboutUsComponent }];

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsModule {}
