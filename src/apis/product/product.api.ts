import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Constants
import * as Constants from '../../constants';

// Model
import { Product } from 'src/models/Product';

// Config
import { APIClient } from '../APIClient';

const client = new APIClient({ endpoint: 'products' });

let userLogin: any = localStorage.getItem(Constants.USER_LOGIN);

let token: string | null =
  userLogin !== null ? JSON.parse(userLogin).token : {};

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

  createProduct(product: any): Observable<Product> {
    return this._http.post<Product>(`${Constants.BASE_URL}/products`, product, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
  }

  updateEntireProduct(product: Product): Observable<Product> {
    return this._http.put<Product>(
      `${Constants.BASE_URL}/products/${product.id}`,
      product,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
  }

  updatePartialProduct(product: Product): Observable<Product> {
    return this._http.patch<Product>(
      `${Constants.BASE_URL}/products/${product.id}`,
      product,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
  }

  deleteProductById(productID: number): Observable<Product> {
    return this._http.delete<Product>(
      `${Constants.BASE_URL}/products/${productID}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
  }
}
