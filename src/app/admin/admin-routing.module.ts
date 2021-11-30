import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin.component';

const routes: Routes = [
  { path: 'admin', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    // children: [
    //   { path: 'products', component: ProductComponent},
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
