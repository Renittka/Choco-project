import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurants } from './restaurants-mock';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {
    return of(Restaurants);
  }

  getRestaurantsByCategoryId(id: number): Observable<Restaurant[]> {
    return of(Restaurants.filter(restaurant => restaurant.category_id === id));
    // restaurants by category list
    // return this.http.get<Restaurant[]>(`${this.BASE_URL}/categories/${category_id}/restaurants/`);
  }

  getRestaurantById(id): Observable<Restaurant> {
    return of(Restaurants.find(restaurant => restaurant.id === id));
    // restaurant detail
    // return this.http.get<Restaurant>(`${this.BASE_URL}/categories/${category_id}/restaurants/${restaurant_id}/`);

  }
}
