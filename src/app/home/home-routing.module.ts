import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { HomeComponent } from './home.component';
import { IndexComponent } from './page/index.component';
import { ShopComponent } from '../shop/shop.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { BlogsComponent } from '../blogs/blogs.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'blogs', component: BlogsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
