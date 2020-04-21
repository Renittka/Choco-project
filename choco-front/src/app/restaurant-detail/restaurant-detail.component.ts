import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Category } from '../category';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService} from '../product.service';
import { RestaurantService} from '../restaurant.service';
import { CategoryService } from '../category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;
  category: Category;

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
    this.getRestaurantById();
    this.getCategory();
  }

  getRestaurantById() {
    const categoryId = +this.route.snapshot.paramMap.get('category_id');
    const restaurantId = +this.route.snapshot.paramMap.get('restaurant_id');
    this.restaurantService.getRestaurantById(categoryId, restaurantId).subscribe( restaurant => this.restaurant = restaurant);
  }

  getCategory() {
    const categoryId = +this.route.snapshot.paramMap.get('category_id');
    this.categoryService.getCategory(categoryId)
      .subscribe(category => this.category = category);
  }

  goBack(): void {
    this.location.back();
  }
}
