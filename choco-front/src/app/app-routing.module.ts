import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { OrderLinkComponent } from './order-link/order-link.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';

const routes: Routes = [
  { path: 'restaurants', component: AllRestaurantsComponent},
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent},

  { path: 'categories/:category_id/restaurants', component: RestaurantListComponent},
  { path: 'categories/:category_id/restaurants/:restaurant_id', component: RestaurantDetailComponent},

  { path: 'categories/:category_id/restaurants/:restaurant_id/products', component: CategoryProductsComponent},
  { path: 'categories/:category_id/restaurants/:restaurant_id/products/:product_id/order', component: OrderLinkComponent},

  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
