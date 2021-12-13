import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Model
import { Category } from 'src/models/Category';
import { Product } from 'src/models/Product';

// API
import { ProductAPI } from '../../../apis/product/product.api';
import { CategoryAPI } from 'src/apis/category/category.api';

@Injectable({
  providedIn: 'root',
})
export class ProductManagementService {
  constructor(
    private _productAPI: ProductAPI,
    private _categoryAPI: CategoryAPI
  ) {}

  actionFetchAllProduct(): Observable<Product[]> {
    return this._productAPI.fetchAllProduct();
  }

  actionFetchProductById(id: number): Observable<Product> {
    // return this._http.get<Product>(`${Constants.BASE_URL}/products/${id}`);
    return this._productAPI.fetchProductById(id);
  }
  actionCreateProduct(product: Product): Observable<Product> {
    let productNew = {
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      thumbnail: 'http://localhost:3000/uploads/images/product-1.jpg',
      category: product.category,
      status: product.status,
    };
    return this._productAPI.createProduct(productNew);
  }

  actionUpdateEntireProduct(product: Product): Observable<Product> {
    return this._productAPI.updateEntireProduct(product);
  }

  actionUpdatePartialProduct(productUpdate: Product): Observable<Product> {
    return this._productAPI.updatePartialProduct(productUpdate);
  }

  actionDeleteProduct(productID: number): Observable<Product> {
    return this._productAPI.deleteProductById(productID);
  }
  actionFetchAllCategory(): Observable<Category[]> {
    return this._categoryAPI.fetchAllCategory();
  }
}
