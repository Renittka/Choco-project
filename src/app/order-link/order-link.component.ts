import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryProductsService} from '../category-products.service';
import {ProductService} from '../product.service';
import {CategoryProducts} from '../category_products';

@Component({
  selector: 'app-order-link',
  templateUrl: './order-link.component.html',
  styleUrls: ['./order-link.component.css']
})
export class OrderLinkComponent implements OnInit {
  products: CategoryProducts[];
  restaurant: any;
  category;
  product: CategoryProducts;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private CategoryProductService: CategoryProductsService,
    private productService: ProductService,
    private location: Location,
  ) {

  }

  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
    this.getProductByRestaraunt();
  }


  getProduct() {
    const id = +this.route.snapshot.paramMap.get('restaraunt_products');
    this.CategoryProductService.getCategoryProducts(id).subscribe( product => this.products = product);
    this.productService.getProduct(id).subscribe( product => this.restaurant = product);
  }
  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getCategory(id).subscribe(category => this.category = category);
  }
  getProductByRestaraunt() {
    const id = +this.route.snapshot.paramMap.get('product_id');
    this.CategoryProductService.getProductByRestaraunt(id).subscribe(product => this.product = product);
  }
  goBack(): void {
    this.location.back();
  }
}
