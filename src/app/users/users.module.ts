import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    UpdateUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
