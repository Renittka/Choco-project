import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { OrderComponent } from './order/order.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { OrderLinkComponent } from './order-link/order-link.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';

@NgModule({
    declarations: [
        AppComponent,
        RestaurantListComponent,
        HeaderComponent,
        CategoriesComponent,
        FooterComponent,
        LoginComponent,
        RegistrationComponent,
        OrderComponent,
        CategoryProductsComponent,
        OrderLinkComponent,
        RestaurantDetailComponent,
        AllRestaurantsComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
