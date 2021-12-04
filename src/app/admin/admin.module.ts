import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  imports: [CommonModule, MaterialModule, AdminRoutingModule],
  providers: [],
})
export class AdminModule {}
