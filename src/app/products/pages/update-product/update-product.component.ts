import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/models/Product';
import { ProductManagementService } from '../../services/product-management.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  public product!: Product;

  public editProductForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductManagementService
  ) {}

  ngOnInit(): void {
    this.product = new Product();
    this.handleParams();
    this.createFormEdit();
  }

  handleParams(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      let idProduct = parseInt(params['id']);
      this._productService.actionFetchProductById(idProduct).subscribe(
        (result: Product) => {
          this.product = result;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  createFormEdit(): void {
    this.editProductForm = this._formBuilder.group({
      name: [''],
      price: [''],
      quantity: [''],
      thumbnail: [''],
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
        this._router.navigateByUrl('/admin/products');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
