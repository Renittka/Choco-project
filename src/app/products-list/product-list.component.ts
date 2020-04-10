import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from '../products-mock';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService} from '../product.service';
import { categories } from '../categories';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = PRODUCTS;
  category;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {
    this.router.events.subscribe((value => {
      this.getProducts();
    }));
  }

  ngOnInit() {
    this.getProducts();
    this.getCategory();
  }
  getProducts() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsByCategoryId(id).subscribe(products => this.products = products);
  }
  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getCategory(id).subscribe(category => this.category = category);
  }
  goBack(): void {
    this.location.back();
  }
}
