import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _productService: ProductManagementService,
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idProduct: number }
  ) {}

  ngOnInit(): void {
    this.product = new Product();
    this.loadData();
    this.loadCategories();
    this.createFormEdit();
  }

  loadData(): void {
    let idProduct: number = this.data.idProduct;
    this._productService.actionFetchProductById(idProduct).subscribe(
      (result: Product) => {
        this.product = result;
      },
      (error) => {
        console.log(error);
      }
    );
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
