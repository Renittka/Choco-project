import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from './product-mocks';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getRestaurantProducts(categoryId: number, restaurantId: number): Observable<Product[]> {
    // return of(Products.filter(product => product.restaurant_id === restId));

    // products by restaurant list
    return this.http.get<Product[]>(`${this.BASE_URL}/categories/${categoryId}/restaurants/${restaurantId}/products/`);
  }

  getProductByRestaurant(categoryId: number, restaurantId: number, productId: number): Observable<Product> {
    // return of(Products.find(product => product.product_id === id));

    // product detail
    return this.http.get<Product>(`${this.BASE_URL}/categories/${categoryId}/restaurants/${restaurantId}/products/${productId}/`);
  }
}
