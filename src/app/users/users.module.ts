import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingsModule } from './users-routing.module';

// Component
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { DeleteUserComponent } from './pages/delete-user/delete-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
  ],
  imports: [CommonModule, UsersRoutingsModule, ReactiveFormsModule],
})
export class UsersModule {}
