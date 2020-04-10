import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {CategoryProduct} from './category_products-mocks';
import {CategoryProducts} from './category_products';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductsService {

  constructor() { }
  getCategoryProduct(id: number): Observable<any> {
    return of(CategoryProduct.find(product => product.product_id === id));
  }

  getCategoryProducts(restId: number): Observable<CategoryProducts[]>{
    return of(CategoryProduct.filter(product => product.restaraunt_id === restId));
  }

  getProductByRestaraunt(id: number): Observable<any> {
    return of(CategoryProduct.find(product => product.product_id === id));
  }
}
