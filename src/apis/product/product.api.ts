import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Constants
import * as Constants from '../../constants';

// Model
import { Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductAPI {
  constructor(private _http: HttpClient) {}

  fetchAllProduct(): Observable<Product[]> {
    return this._http.get<Product[]>(`${Constants.BASE_URL}/products`);
  }

  fetchProductById(id: number): Observable<Product> {
    return this._http.get<Product>(`${Constants.BASE_URL}/products/${id}`);
  }

  fetchProductByCode(categoryCode: string): Observable<Product[]> {
    return this._http.get<Product[]>(
      `${Constants.BASE_URL}/products?category=${categoryCode}`
    );
  }

  createProduct(product: any): Observable<Product> {
    return this._http.post<Product>(`${Constants.BASE_URL}/products`, product);
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

  deleteProductById(productID: number): Observable<Product> {
    return this._http.delete<Product>(
      `${Constants.BASE_URL}/products/${productID}`
    );
  }
}
