import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductAPI } from 'src/apis/product/product.api';

import { Product } from 'src/models/Product';
import { ProductManagementService } from '../../services/product-management.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  public productList: Product[] = [];

  private _subscription!: Subscription;

  constructor(
    private _router: Router,
    private _productAPI: ProductAPI,
    private _productService: ProductManagementService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._subscription = this._productService
      .actionFetchAllProduct(this._productAPI)
      .subscribe(
        (result: Product[]) => {
          this.productList = result;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onDeleteProduct(id: number): void {
    this._productService.actionDeleteProduct(this._productAPI, id).subscribe(
      (result) => {
        this.updateDataAfterDelete(id);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateDataAfterDelete(id: number): void {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id === id) {
        this.productList.splice(i, 1);
        break;
      }
    }
  }

  // onEditProduct(id: number): void {
  //   this._router.navigate(['products/editProduct', id]);
  // }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
