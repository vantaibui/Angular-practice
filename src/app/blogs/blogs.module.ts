import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsComponent } from './blogs.component';
import { HeaderModule } from '../shared/home-layout/header/header.module';
import { FooterModule } from '../shared/home-layout/footer/footer.module';
import { BlogsRoutingModule } from './blogs-routing.module';

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, HeaderModule, FooterModule, BlogsRoutingModule],
  exports: [BlogsComponent],
})
export class BlogsModule {}
