import { Component, OnInit } from '@angular/core';

import { ProductAPI } from 'src/apis/product/product.api';
import { Product } from 'src/models/Product';
import { ProductManagementService } from '../../services/product-management.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
  public productList: Product[] = [];

  constructor(
    private _productAPI: ProductAPI,
    private _productService: ProductManagementService
  ) {}

  ngOnInit(): void {}

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
}
