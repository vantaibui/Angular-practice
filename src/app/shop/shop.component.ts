import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from 'src/models/Product';
import { ProductAPI } from 'src/apis/product/product.api';
import { ShopManagementService } from './services/shop-management.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  public products: Product[] = [];

  private _subscription!: Subscription;

  constructor(
    private _productAPI: ProductAPI,
    private _shopService: ShopManagementService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._subscription = this._shopService
      .actionFetchAllProduct(this._productAPI)
      .subscribe(
        (result: Product[]) => {
          this.products = result;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
