import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurants } from './restaurants-mock';
import { categories} from './categories';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getProduct(id: number): Observable<any> {
    return of(Restaurants.find(restaurant => restaurant.id === id));
  }

  getRestaurants(): Observable<any> {
    return of(Restaurants);
  }

  getRestaurantsByCategoryId(id: number): Observable<any> {
    return of(Restaurants.filter(restaurant => restaurant.category_id === id));
  }
  getRestaurantById(id): Observable<any> {
    return of(Restaurants.find(restaurant => restaurant.id === id));
  }

  getCategory(id: number): Observable<any> {
    return of(categories.find(category => category.id === id));
  }

  getCategories(): Observable<Category[]> {
    return of(categories);
    // return this.http.get<Category[]>(`${this.BASE_URL}/categories/`);
  }
}
