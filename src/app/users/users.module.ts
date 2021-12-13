import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { AdminLayoutModule } from '../shared/admin-layout/admin-layout.module';

import { MaterialModule } from '../shared/material/material.module';

import { UserManagementService } from './services/user-management.service';

// Component
import * as Component from './pages';

@NgModule({
  declarations: [
    UsersComponent,
    Component.UserListComponent,
    Component.DeleteUserComponent,
    Component.UpdateUserComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    AdminLayoutModule,
    UsersRoutingModule,
  ],
  providers: [UserManagementService],
  exports: [UsersComponent],
})
export class UsersModule {}
