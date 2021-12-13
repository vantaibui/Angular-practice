import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './pages/sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';

// Material
import { MaterialModule } from '../shared/material/material.module';
import { AuthenticateService } from './services/authenticate.service';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SignInRoutingModule,
  ],
  providers: [AuthenticateService],
  exports: [SignInComponent],
})
export class SignInModule {}
