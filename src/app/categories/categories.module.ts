import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/update-category/update-category.component';
import { DeleteCategoryComponent } from './pages/delete-category/delete-category.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryManagementService } from './services/category-management.service';
import { CategoryAPI } from 'src/apis/category/category.api';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    CategoriesRoutingModule,
  ],
  providers: [CategoryAPI, CategoryManagementService],
})
export class CategoriesModule {}
