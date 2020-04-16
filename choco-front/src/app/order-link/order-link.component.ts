import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryProductsService } from '../category-products.service';
import { ProductService } from '../product.service';
import { CategoryProduct } from '../category_products';
import { PRODUCTS } from '../products-mock';


@Component({
  selector: 'app-order-link',
  templateUrl: './order-link.component.html',
  styleUrls: ['./order-link.component.css']
})
export class OrderLinkComponent implements OnInit {
  products: CategoryProduct[];
  restaurant: any;
  category;
  product: CategoryProduct;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private CategoryProductService: CategoryProductsService,
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
    this.getProductByRestaurant();
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('restaurant_id');
    this.CategoryProductService.getCategoryProduct(id).subscribe( product => this.products = product);
    this.productService.getProduct(id).subscribe( product => this.restaurant = product);
  }
  getProductByRestaurant() {
    const id = +this.route.snapshot.paramMap.get('product_id');
    this.CategoryProductService.getProductByRestaurant(id).subscribe(product => this.product = product);
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

    order() {
      alert('Your Order is accepted');
    }
  }
