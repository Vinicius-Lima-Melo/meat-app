import { NotFoundComponent } from './not-found/not-found.component';
// import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
// import { OrderComponent } from './order/order.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { LoginComponent } from './security/login/login.component';
import { LoogedinGuard } from './security/login/loogedin.guard';
export var ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'login/:to', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    // {path: 'about', component: AboutComponent},
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'order', loadChildren: './order/order.module#OrderModule', canLoad: [LoogedinGuard], canActivate: [LoogedinGuard] },
    { path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'order-sumary', component: OrderSumaryComponent },
    { path: '**', component: NotFoundComponent }
];
//# sourceMappingURL=app.routes.js.map