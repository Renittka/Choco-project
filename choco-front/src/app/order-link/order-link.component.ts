import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Category } from '../category';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-order-link',
  templateUrl: './order-link.component.html',
  styleUrls: ['./order-link.component.css']
})
export class OrderLinkComponent implements OnInit {
  restaurant: any;
  category: Category;
  product: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private location: Location
  ) {
    // this.router.events.subscribe((value => {
    //   this.getProducts();
    // }));
  }

  ngOnInit() {
    this.getCategory();
    this.getProductByRestaurant();
  }

  getProductByRestaurant() {
    const id = +this.route.snapshot.paramMap.get('product_id');
    this.productService.getProductByRestaurant(id).subscribe(product => this.product = product);
  }

  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }

    goBack(): void {
      this.location.back();
  }

    order() {
      alert('Your Order is accepted');
    }
  }
