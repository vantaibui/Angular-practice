import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductAPI } from 'src/apis/product/product.api';
import { Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ShopManagementService {
  constructor(private _http: HttpClient) {}

  public data: Product[] = [];

  actionFetchAllProduct(productAPI: ProductAPI): Observable<Product[]> {
    return productAPI.fetchAllProduct();
  }
}
