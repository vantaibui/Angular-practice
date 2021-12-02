import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Model
import { Product } from 'src/models/Product';

// Constants
import * as Constants from '../../../constants';

import { ProductAPI } from '../../../apis/product/product.api';

let userLogin: any = localStorage.getItem(Constants.USER_LOGIN);

let token: string | null =
  userLogin !== null ? JSON.parse(userLogin).token : {};

@Injectable({
  providedIn: 'root',
})
export class ProductManagementService {
  constructor(private _http: HttpClient) {}

  public data: Product[] = [];

  actionFetchAllProduct(productAPI: ProductAPI): Observable<Product[]> {
    return productAPI.fetchAllProduct();
  }

  actionFetchProductById(
    productAPI: ProductAPI,
    id: number
  ): Observable<Product> {
    // return this._http.get<Product>(`${Constants.BASE_URL}/products/${id}`);
    return productAPI.fetchProductById(id);
  }
  actionCreateProduct(
    productAPI: ProductAPI,
    product: Product
  ): Observable<Product> {
    let productNew = {
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      thumbnail: product.thumbnail,
      status: product.status,
    };

    return productAPI.createProduct(productNew);
  }

  actionUpdateEntireProduct(
    productAPI: ProductAPI,
    product: Product
  ): Observable<Product> {
    return this._http.put<Product>(
      `${Constants.BASE_URL}/products/${product.id}`,
      product
    );
  }

  actionUpdatePartialProduct(
    productAPI: ProductAPI,
    productUpdate: Product
  ): Observable<Product> {
    return productAPI.updatePartialProduct(productUpdate);
  }

  actionDeleteProduct(
    productAPI: ProductAPI,
    productID: number
  ): Observable<Product> {
    return productAPI.deleteProductById(productID);
  }
}
