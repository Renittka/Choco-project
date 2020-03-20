import {Component, Input, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(   private router: Router, private route: ActivatedRoute, private productsService: ProductService,
                 private location: Location ) {
  }
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProductById(id)
      .subscribe(product => this.product = product);
  }
  goBack(): void {
    this.location.back();
  }

}
