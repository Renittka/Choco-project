import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { PRODUCTS } from './products-mock';
import { categories} from './categories';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  getProduct(id: number): Observable<any> {
    return of(PRODUCTS.find(product => product.id === id));
  }

  getProducts(): Observable<any> {
    return of(PRODUCTS);
  }

  getProductsByCategoryId(id: number): Observable<any> {
    return of(PRODUCTS.filter(product => product.category_id === id));
  }
  getProductById(id): Observable<any> {
    return of(PRODUCTS.find(product => product.id === id));
  }

  getCategory(id: number): Observable<any> {
    return of(categories.find(category => category.id === id));
  }

  getCategories(): Observable<any> {
    return of(categories);
  }
}
