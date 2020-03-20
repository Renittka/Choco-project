import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent} from './products-list/product-list.component';
import { CategoriesComponent} from './categories/categories.component';
import { ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent},
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:id', component: ProductDetailComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
