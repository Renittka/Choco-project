import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from '../products-mock';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService} from '../product.service';
import {Product} from '../product';
import {Location} from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product;
  products = PRODUCTS;
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
  }
  getProducts() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsByCategoryId(id).subscribe(products => this.products = products);
  }
  goBack(): void {
    this.location.back();
  }
}
