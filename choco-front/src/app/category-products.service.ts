import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryProducts } from './category_products-mocks';
import { CategoryProduct } from './category_products';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductsService {

  constructor() { }
  getCategoryProduct(id: number): Observable<any> {
    return of(CategoryProducts.find(product => product.product_id === id));
  }

  getRestaurantProducts(restId: number): Observable<CategoryProduct[]> {
    return of(CategoryProducts.filter(product => product.restaurant_id === restId));
  }

  getProductByRestaurant(id: number): Observable<any> {
    return of(CategoryProducts.find(product => product.product_id === id));
  }
}
