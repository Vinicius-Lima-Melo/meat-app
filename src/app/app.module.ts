// import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';



import {ROUTES} from  './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
// import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
// import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
// import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { OrderItensComponent } from './order/order-itens/order-itens.component';
// import { OrderService } from './order/order.service';
// import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';

import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSumaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule.forRoot(),
    //CoreModule, os providers estao no sharedModule.forRoot e da pra importar o sharedModule mais o metodo forRoot = providers
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES,{preloadingStrategy: PreloadAllModules})
  ],
  //providers: [RestaurantsService,ShoppingCartService, OrderService ,{provide: LOCALE_ID, useValue:'pt-BR'}],
  //os providers de servicos foram param o CoreModule
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy} ,{provide: LOCALE_ID, useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
//Toda vez que alguem chamar o locale_id ele diz que é o pt-BR
