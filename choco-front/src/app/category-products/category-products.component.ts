import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { RestaurantService } from '../restaurant.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  products: Product[];
  restaurant: Restaurant;
  category: Category;
  product: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private restaurantService: RestaurantService,
    private categoryService: CategoryService,
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
    this.productService.getRestaurantProducts(id).subscribe( products => this.products = products);
  }

  getRestaurantById() {
    const id = +this.route.snapshot.paramMap.get('restaurant_id');
    this.restaurantService.getRestaurantById(id).subscribe( restaurant => this.restaurant = restaurant);
  }

  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id)
      .subscribe(category => this.category = category);
  }

  goBack(): void {
    this.location.back();
  }
}
