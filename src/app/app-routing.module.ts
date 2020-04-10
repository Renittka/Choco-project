import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent} from './products-list/product-list.component';
import { CategoriesComponent} from './categories/categories.component';
import { ProductDetailComponent} from './product-detail/product-detail.component';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrderlinkComponent } from './orderlink/orderlink.component'

const routes: Routes = [
  { path: 'restaurants', component: ProductListComponent},
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:id', component: ProductListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'orderlink', component: OrderlinkComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
