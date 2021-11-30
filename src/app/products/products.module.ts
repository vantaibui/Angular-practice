import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DeleteProductComponent } from './pages/delete-product/delete-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';



@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
