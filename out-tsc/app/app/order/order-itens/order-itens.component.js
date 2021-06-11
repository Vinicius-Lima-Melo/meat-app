var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var OrderItensComponent = /** @class */ (function () {
    function OrderItensComponent() {
        this.increaseQty = new EventEmitter();
        this.decreaseQty = new EventEmitter();
        this.remove = new EventEmitter();
    }
    OrderItensComponent.prototype.ngOnInit = function () {
    };
    OrderItensComponent.prototype.emitIncreaseQty = function (item) {
        this.increaseQty.emit(item);
    };
    OrderItensComponent.prototype.emitDecreaseQty = function (item) {
        this.decreaseQty.emit(item);
    };
    OrderItensComponent.prototype.emitRemove = function (item) {
        this.remove.emit(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], OrderItensComponent.prototype, "items", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], OrderItensComponent.prototype, "increaseQty", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], OrderItensComponent.prototype, "decreaseQty", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], OrderItensComponent.prototype, "remove", void 0);
    OrderItensComponent = __decorate([
        Component({
            selector: 'mt-order-itens',
            templateUrl: './order-itens.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], OrderItensComponent);
    return OrderItensComponent;
}());
export { OrderItensComponent };
//# sourceMappingURL=order-itens.component.js.map