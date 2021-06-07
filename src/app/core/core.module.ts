import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { NgModule } from "@angular/core";
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { OrderService } from 'app/order/order.service';

@NgModule({
  providers: [ShoppingCartService, RestaurantsService, OrderService]
})
export class CoreModule{

}
