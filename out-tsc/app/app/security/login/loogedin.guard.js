var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
var LoogedinGuard = /** @class */ (function () {
    function LoogedinGuard(loginService) {
        this.loginService = loginService;
    }
    LoogedinGuard.prototype.checkAuthentication = function (path) {
        var loogedIn = this.loginService.isLoogedIn();
        if (!loogedIn) {
            this.loginService.handleLogin("/" + path);
        }
        return loogedIn;
    };
    LoogedinGuard.prototype.canLoad = function (route) {
        console.log('canLoad');
        return this.checkAuthentication(route.path);
    };
    LoogedinGuard.prototype.canActivate = function (activatedRoute, routerState) {
        console.log('canActivated');
        return this.checkAuthentication(activatedRoute.routeConfig.path);
    };
    LoogedinGuard = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LoginService])
    ], LoogedinGuard);
    return LoogedinGuard;
}());
export { LoogedinGuard };
//# sourceMappingURL=loogedin.guard.js.map