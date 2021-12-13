import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/models/Category';

import { Product } from 'src/models/Product';

import { ProductManagementService } from '../../services/product-management.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit, OnDestroy {
  public createProductForm!: FormGroup;

  private _product!: Product;

  public categories: Category[] = [];

  public status: Boolean = true;

  private _subscription!: Subscription;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _productService: ProductManagementService,
    public dialogRef: MatDialogRef<AddProductComponent>
  ) {
    this._product = new Product();
  }

  ngOnInit(): void {
    this.createForm();
    this.loadCategories();
  }

  createForm(): void {
    this.createProductForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      category: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  onCreateProduct(): void {
    let formValues = this.createProductForm.value;

    this._product.name = formValues['name'];
    this._product.price = formValues['price'];
    this._product.quantity = formValues['quantity'];
    this._product.thumbnail = formValues['thumbnail'];
    this._product.category = formValues['category'];
    this._product.status =
      formValues['status'] === '' || formValues['status'] === 'true'
        ? true
        : false;

    this._subscription = this._productService
      .actionCreateProduct(this._product)
      .subscribe(
        (result) => {
          this._product = result;
          // this._router.navigateByUrl('/admin/products');
          this.dialogRef.close(this._product);
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

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
