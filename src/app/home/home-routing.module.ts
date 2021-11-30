import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import * as Component from './pages';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: Component.HomeComponent,
    children: [
      { path: 'shop', component: Component.ShopComponent },
      { path: 'about', component: Component.AboutComponent },
      { path: 'review', component: Component.ReviewComponent },
      { path: 'blogs', component: Component.BlogsComponent },
      { path: 'contact', component: Component.ContactComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
