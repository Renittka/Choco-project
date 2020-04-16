import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryProductsService } from '../category-products.service';
import { ProductService } from '../product.service';
import { CategoryProduct } from '../category_products';
import { Category } from '../category';


@Component({
  selector: 'app-order-link',
  templateUrl: './order-link.component.html',
  styleUrls: ['./order-link.component.css']
})
export class OrderLinkComponent implements OnInit {
  restaurant: any;
  category: Category;
  product: CategoryProduct;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private CategoryProductService: CategoryProductsService,
    private productService: ProductService,
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
    this.CategoryProductService.getProductByRestaurant(id).subscribe(product => this.product = product);
  }

  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getCategory(id).subscribe(category => this.category = category);
  }

    goBack(): void {
      this.location.back();
  }

    order() {
      alert('Your Order is accepted');
    }
  }
