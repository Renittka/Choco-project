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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private CategoryProductService: CategoryProductsService,
    private productService: ProductService,
    private location: Location
  ) {
    // this.router.events.subscribe((value => {
    //    this.getProducts();
    // }));
  }
  ngOnInit() {
    this.getProduct();
    this.getCategory();
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

  goBack(): void {
    this.location.back();
  }
}
