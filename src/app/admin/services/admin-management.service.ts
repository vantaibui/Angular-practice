import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/models/Product';
import { ProductAPI } from 'src/apis/product/product.api';

import { Category } from 'src/models/Category';
import { CategoryAPI } from 'src/apis/category/category.api';
import { UserAPI } from 'src/apis/user/user.api';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root',
})
export class AdminManagementService {
  constructor(
    private _categoryAPI: CategoryAPI,
    private _productAPI: ProductAPI,
    private _userAPI: UserAPI
  ) {}

  actionFetchAllCategory(): Observable<Category[]> {
    return this._categoryAPI.fetchAllCategory();
  }

  actionFetchAllProduct(): Observable<Product[]> {
    return this._productAPI.fetchAllProduct();
  }

  actionFetchAllUser(): Observable<User[]> {
    return this._userAPI.fetchAllUser();
  }
}
