import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Component
import { LoginComponent } from './pages/login.component';

// Service
import { AuthenticateService } from './services/authenticate.service';

// // Material
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  providers: [AuthenticateService],
  exports: [LoginComponent],
})
export class LoginModule {}
