import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Model
import { Product } from 'src/models/Product';

// Constants
import * as Constants from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class ProductManagementService {
  constructor(private _http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    return this._http.get<Product[]>(`${Constants.BASE_URL}/products`);
  }

  getProductById(id: number): Observable<Product> {
    return this._http.get<Product>(`${Constants.BASE_URL}/products/${id}`);
  }

  updateEntireProduct(product: Product): Observable<Product> {
    return this._http.put<Product>(
      `${Constants.BASE_URL}/products/${product.id}`,
      product
    );
  }

  updatePartialProduct(product: Product): Observable<Product> {
    return this._http.patch<Product>(
      `${Constants.BASE_URL}/products/${product.id}`,
      product
    );
  }
}
