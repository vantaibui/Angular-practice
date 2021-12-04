import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _productService: ProductManagementService
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
      thumbnail: 'http://dummyimage.com/203x100.png/ff4444/ffffff',
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

    this._productService.actionCreateProduct(this._product).subscribe(
      (result) => {
        this._product = result;
        this._router.navigateByUrl('/admin/products');
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

  ngOnDestroy(): void {}
}
