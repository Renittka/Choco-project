import { Injectable } from '@angular/core';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';
import { categories } from './categories';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getCategory(categoryId: number): Observable<Category> {
    // return of(categories.find(category => category.id === id));

    // category detail
    return this.http.get<Category>(`${this.BASE_URL}/categories/${categoryId}/`);
  }

  getCategories(): Observable<Category[]> {
    // return of(categories);

    // categories list
    return this.http.get<Category[]>(`${this.BASE_URL}/categories/`);
  }
}
