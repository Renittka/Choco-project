import { Component, OnInit } from '@angular/core';
import { CategoryProductsService} from '../category-products.service';
import { ProductService} from '../product.service';
import { CategoryProduct } from '../category_products';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  products: CategoryProduct[];
  restaurant: any;
  category;
  product: CategoryProduct;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private CategoryProductService: CategoryProductsService,
    private productService: ProductService,
    private location: Location
  ) {
  }
  ngOnInit() {
    this.getProductsByRestaurant();
  }

  getProductsByRestaurant() {
    const id = +this.route.snapshot.paramMap.get('restaurant_id');
    this.CategoryProductService.getRestaurantProducts(id).subscribe( products => this.products = products);
  }

  goBack(): void {
    this.location.back();
  }
}
