import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Constants
import * as Constants from '../../constants';

// Model
import { Category } from 'src/models/Category';

@Injectable({ providedIn: 'root' })
export class CategoryAPI {
  constructor(private _http: HttpClient) {}

  fetchAllCategory(): Observable<Category[]> {
    return this._http.get<Category[]>(`${Constants.BASE_URL}/categories`);
  }

  fetchCategoryById(id: number): Observable<Category> {
    return this._http.get<Category>(`${Constants.BASE_URL}/categories/${id}`);
  }

  fetchCategoryByCode(code: string): Observable<Category[]> {
    return this._http.get<Category[]>(
      `${Constants.BASE_URL}/categories?code=${code}`
    );
  }

  createCategory(category: Category): Observable<Category> {
    return this._http.post<Category>(
      `${Constants.BASE_URL}/categories`,
      category
    );
  }

  updateEntireCategory(category: Category): Observable<Category> {
    return this._http.put<Category>(
      `${Constants.BASE_URL}/categories/${category.id}`,
      category
    );
  }

  updatePartialCategory(category: Category): Observable<Category> {
    return this._http.patch<Category>(
      `${Constants.BASE_URL}/categories/${category.id}`,
      category
    );
  }

  deleteCategoryById(categoryID: number): Observable<Category> {
    return this._http.delete<Category>(
      `${Constants.BASE_URL}/categories/${categoryID}`
    );
  }
}
