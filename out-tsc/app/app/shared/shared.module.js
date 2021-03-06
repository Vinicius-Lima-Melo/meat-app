var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NotificationService } from './messages/notification.service';
import { OrderService } from './../order/order.service';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { LoginService } from 'app/security/login/login.service';
import { LoogedinGuard } from 'app/security/login/loogedin.guard';
import { LeaveOrderGuard } from 'app/order/leave-order.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/security/auth.interceptor';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [ShoppingCartService,
                RestaurantsService,
                OrderService,
                NotificationService,
                LoginService,
                LoogedinGuard,
                LeaveOrderGuard,
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        NgModule({
            declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
            imports: [CommonModule, FormsModule, ReactiveFormsModule],
            exports: [InputComponent, RadioComponent, RatingComponent,
                CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map