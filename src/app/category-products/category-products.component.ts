import { Component, OnInit } from '@angular/core';
import { CategoryProductsService} from '../category-products.service';
import { ProductService} from '../product.service';
import { CategoryProducts } from '../category_products';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  products: CategoryProducts[];
  restaurant: any;
  category;
  product: CategoryProducts;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private CategoryProductService: CategoryProductsService,
    private productService: ProductService,
    private location: Location
  ) {
  }
  ngOnInit() {
    this.getProduct();
    this.getCategory();
    this.getProductByRestaraunt();
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('restaraunt_id');
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
