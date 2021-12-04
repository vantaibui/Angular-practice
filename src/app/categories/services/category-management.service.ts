import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryAPI } from 'src/apis/category/category.api';
import { Category } from 'src/models/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryManagementService {
  constructor(private _categoryAPI: CategoryAPI) {}

  actionFetchAllCategory(): Observable<Category[]> {
    return this._categoryAPI.fetchAllCategory();
  }
  actionFetchCategoryById(idCategory: number): Observable<Category> {
    return this._categoryAPI.fetchCategoryById(idCategory);
  }
  actionUpdateCategory(category: Category): Observable<Category> {
    return this._categoryAPI.updatePartialCategory(category);
  }
  actionDeleteCategory(idCategory: number): Observable<Category> {
    return this._categoryAPI.deleteCategoryById(idCategory);
  }
}
