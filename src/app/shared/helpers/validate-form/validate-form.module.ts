import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateFormComponent } from './validate-form.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [ValidateFormComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ValidateFormComponent],
})
export class ValidateFormModule {}
