import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent} from './products-list/product-list.component';
import { CategoriesComponent} from './categories/categories.component';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {CategoryProductsComponent} from './category-products/category-products.component';
import {OrderLinkComponent} from './order-link/order-link.component';

const routes: Routes = [
  { path: 'restaurants', component: ProductListComponent},
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:id', component: ProductListComponent},
  { path: 'categories/:id/:restaraunt_id', component: CategoryProductsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'categories/:id/:restaraunt_id/:product_id', component: OrderLinkComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
