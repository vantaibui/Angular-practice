import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Category } from 'src/models/Category';
import { Product } from 'src/models/Product';
import { ProductManagementService } from '../../services/product-management.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  public product!: Product;

  public categories!: Category[];

  public editProductForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _productService: ProductManagementService,
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product }
  ) {}

  ngOnInit(): void {
    this.product = this.data.product;
    this.loadCategories();
    this.createFormEdit();
  }

  createFormEdit(): void {
    this.editProductForm = this._formBuilder.group({
      name: [''],
      price: [''],
      quantity: [''],
      thumbnail: [''],
      category: [''],
      status: [''],
    });
  }

  onUpdateProduct(): void {
    let formValues = this.editProductForm.value;

    this.product.name =
      formValues['name'] !== '' ? formValues['name'] : this.product.name;
    this.product.price =
      formValues['price'] !== '' ? formValues['price'] : this.product.price;
    this.product.quantity =
      formValues['quantity'] !== ''
        ? formValues['quantity']
        : this.product.quantity;
    this.product.thumbnail =
      formValues['thumbnail'] !== ''
        ? formValues['thumbnail']
        : this.product.thumbnail;

    if (formValues['status'] === 'true') {
      this.product.status = true;
    } else if (formValues['status'] === 'false') {
      this.product.status = false;
    } else {
      this.product.status = this.product.status;
    }

    this._productService.actionUpdatePartialProduct(this.product).subscribe(
      (result) => {
        this.product = result;
        this.dialogRef.close(this.product);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadCategories(): void {
    this._productService.actionFetchAllCategory().subscribe(
      (result) => {
        this.categories = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
