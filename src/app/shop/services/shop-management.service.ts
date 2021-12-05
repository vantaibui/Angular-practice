import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryAPI } from 'src/apis/category/category.api';

import { ProductAPI } from 'src/apis/product/product.api';
import { Category } from 'src/models/Category';
import { Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ShopManagementService {
  constructor(
    private _productAPI: ProductAPI,
    private _categoryAPI: CategoryAPI
  ) {}

  actionFetchAllProduct(): Observable<Product[]> {
    return this._productAPI.fetchAllProduct();
  }

  actionFetchProductByCategoryCode(
    categoryCode: string
  ): Observable<Product[]> {
    return this._productAPI.fetchProductByCode(categoryCode);
  }

  actionFetchProductById(id: number): Observable<Product> {
    return this._productAPI.fetchProductById(id);
  }

  actionFetchAllCategory(): Observable<Category[]> {
    return this._categoryAPI.fetchAllCategory();
  }

  actionFetchCategoryById(id: number): Observable<Category> {
    return this._categoryAPI.fetchCategoryById(id);
  }
}
