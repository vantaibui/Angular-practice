import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';

import { ProductsComponent } from './products.component';
import { ProductsRoutingsModule } from './products-routing.module';

import { AdminLayoutModule } from '../shared/admin-layout/admin-layout.module';

import { ProductManagementService } from './services/product-management.service';

// Component
import * as Component from './pages';

@NgModule({
  declarations: [
    ProductsComponent,
    Component.ProductListComponent,
    Component.AddProductComponent,
    Component.DeleteProductComponent,
    Component.UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    AdminLayoutModule,
    ProductsRoutingsModule,
  ],
  providers: [ProductManagementService],
})
export class ProductsModule {}
