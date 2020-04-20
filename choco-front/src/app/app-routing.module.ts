import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import { CategoriesComponent} from './categories/categories.component';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {CategoryProductsComponent} from './category-products/category-products.component';
import {OrderLinkComponent} from './order-link/order-link.component';
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantListComponent},
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:id', component: RestaurantListComponent},
  { path: 'categories/:id/:restaurant_id', component: CategoryProductsComponent},
  { path: 'categories/:id/:restaurant_id/detail', component: RestaurantDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'categories/:id/:restaurant_id/:product_id', component: OrderLinkComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
