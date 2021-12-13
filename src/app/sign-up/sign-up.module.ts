import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './pages/sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';

// Material
import { MaterialModule } from '../shared/material/material.module';
import { SignUpService } from './services/sign-up.service';
import { ValidateFormModule } from '../shared/helpers/validate-form/validate-form.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ValidateFormModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
  ],
  providers: [SignUpService],
  exports: [SignUpComponent],
})
export class SignUpModule {}
