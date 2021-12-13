import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../shared/material/material.module';
import { AdminLayoutModule } from '../shared/admin-layout/admin-layout.module';
import { AdminManagementService } from './services/admin-management.service';

@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AdminLayoutModule,
    AdminRoutingModule,
  ],
  providers: [AdminManagementService],
})
export class AdminModule {}
