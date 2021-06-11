var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { LoginService } from './security/login/login.service';
import { NotificationService } from './shared/messages/notification.service';
var AplicationErrorHandler = /** @class */ (function (_super) {
    __extends(AplicationErrorHandler, _super);
    function AplicationErrorHandler(ns, injector, zone) {
        var _this = _super.call(this) || this;
        _this.ns = ns;
        _this.injector = injector;
        _this.zone = zone;
        return _this;
    }
    AplicationErrorHandler.prototype.handleError = function (errorResponse) {
        var _this = this;
        if (errorResponse instanceof HttpErrorResponse) {
            var message_1 = errorResponse.error.message;
            this.zone.run(function () {
                switch (errorResponse.status) {
                    case 401:
                        _this.injector.get(LoginService).handleLogin();
                        break;
                    case 403:
                        _this.ns.notify(message_1 || 'Não autorizado.');
                        break;
                    case 404:
                        _this.ns.notify(message_1 || 'Recurso não encontrado. Verifique o console para mais detalhes.');
                        break;
                }
            });
        }
        _super.prototype.handleError.call(this, errorResponse);
    };
    AplicationErrorHandler = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NotificationService, Injector, NgZone])
    ], AplicationErrorHandler);
    return AplicationErrorHandler;
}(ErrorHandler));
export { AplicationErrorHandler };
//# sourceMappingURL=app.error-handler.js.map