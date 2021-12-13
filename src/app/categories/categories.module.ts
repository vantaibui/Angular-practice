import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';

import { MaterialModule } from '../shared/material/material.module';
import { AdminLayoutModule } from '../shared/admin-layout/admin-layout.module';

import { CategoryManagementService } from './services/category-management.service';

// Components
import * as Component from './pages';

@NgModule({
  declarations: [
    CategoriesComponent,
    Component.CategoryListComponent,
    Component.AddCategoryComponent,
    Component.UpdateCategoryComponent,
    Component.DeleteCategoryComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    AdminLayoutModule,
    CategoriesRoutingModule,
  ],
  providers: [CategoryManagementService],
})
export class CategoriesModule {}
