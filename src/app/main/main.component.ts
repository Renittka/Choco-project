import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from '../products-mock';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() product;

  products = PRODUCTS;
// items: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.router.events.subscribe((value =>{
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
}
