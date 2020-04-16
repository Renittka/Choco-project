import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurants } from './restaurants-mock';
import { categories} from './categories';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
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

  getCategories(): Observable<any> {
    return of(categories);
  }
}
