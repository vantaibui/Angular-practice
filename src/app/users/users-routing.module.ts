import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { AuthorizationGuard } from '../shared/helpers/authorization.guard';

// Component
import * as Component from './pages';

export const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [AuthorizationGuard],
    children: [{ path: '', component: Component.UserListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
