import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../restaurant';
import {ActivatedRoute, Router} from '@angular/router';
import {RestaurantService} from '../restaurant.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.css']
})
export class AllRestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private location: Location
  ) {
    this.router.events.subscribe((value => {
      this.getRestaurants();
    }));
  }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  goBack(): void {
    this.location.back();
  }
}
