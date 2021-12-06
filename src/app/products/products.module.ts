import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';

import { ProductsRoutingsModule } from './products-routing.module';
import { ProductAPI } from 'src/apis/product/product.api';
import { ProductManagementService } from './services/product-management.service';

// Component
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DeleteProductComponent } from './pages/delete-product/delete-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AdminLayoutModule } from '../shared/admin-layout/admin-layout.module';

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    AdminLayoutModule,
    ProductsRoutingsModule,
  ],
  providers: [ProductAPI, ProductManagementService],
})
export class ProductsModule {}
