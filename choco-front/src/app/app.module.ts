import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrderComponent } from './order/order.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { OrderLinkComponent } from './order-link/order-link.component';

@NgModule({
    declarations: [
        AppComponent,
        RestaurantListComponent,
        HeaderComponent,
        CategoriesComponent,
        FooterComponent,
        LoginComponent,
        SignupComponent,
        OrderComponent,
        CategoryProductsComponent,
        OrderLinkComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
