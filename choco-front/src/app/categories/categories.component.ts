import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService} from '../product.service';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products: any;
  categories: Category[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.router.events.subscribe((value => {
      this.getCategories();
    }));
  }
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.productService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
