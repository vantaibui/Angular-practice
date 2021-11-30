import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './pages/sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';

// Material
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
  ],
  exports: [SignUpComponent],
})
export class SignUpModule {}
