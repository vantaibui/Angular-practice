import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  {
    path: 'blogs',
    component: BlogsComponent,
    children: [{ path: 'blog/:id', component: BlogsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
