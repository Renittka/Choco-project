import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products-mock';
import { Location } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService} from '../product.service';
import { categories } from '../categories';

@Component({
  selector: 'app-orderlink',
  templateUrl: './orderlink.component.html',
  styleUrls: ['./orderlink.component.css']
})
export class OrderlinkComponent implements OnInit {
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

  order(){
    alert('Your Order is accepted')
  }

}
