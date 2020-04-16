import { Component, OnInit } from '@angular/core';
import { CategoryProductsService } from '../category-products.service';
import { ProductService } from '../product.service';
import { CategoryProduct } from '../category_products';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../category';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  products: CategoryProduct[];
  restaurant: any;
  category: Category;
  product: CategoryProduct;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryProductService: CategoryProductsService,
    private productService: ProductService,
    private location: Location
  ) {
  }
  ngOnInit() {
    this.getProductsByRestaurant();
    this.getRestaurantById();
    this.getCategory();
  }

  getProductsByRestaurant() {
    const id = +this.route.snapshot.paramMap.get('restaurant_id');
    this.categoryProductService.getRestaurantProducts(id).subscribe( products => this.products = products);
  }

  getRestaurantById() {
    const id = +this.route.snapshot.paramMap.get('restaurant_id');
    this.productService.getRestaurantById(id).subscribe( restaurant => this.restaurant = restaurant);
  }

  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getCategory(id)
      .subscribe(category => this.category = category);
  }

  goBack(): void {
    this.location.back();
  }
}
