import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService} from '../restaurant.service';
import { Location } from '@angular/common';
import { Category } from '../category';
import { Restaurant } from '../restaurant';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-main',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[];
  category: Category;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private categoryService: CategoryService,
    private location: Location
  ) {
    this.router.events.subscribe((value => {
      this.getRestaurants();
    }));
  }

  ngOnInit() {
    this.getRestaurants();
    this.getCategory();
  }

  getRestaurants() {
    const categoryId = +this.route.snapshot.paramMap.get('category_id');
    this.restaurantService.getRestaurantsByCategoryId(categoryId)
      .subscribe(restaurants => this.restaurants = restaurants);
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
