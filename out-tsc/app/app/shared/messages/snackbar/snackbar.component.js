var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { timer } from 'rxjs';
import { NotificationService } from './../notification.service';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { tap, switchMap } from 'rxjs/operators';
var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(notificationService) {
        this.notificationService = notificationService;
        this.message = 'Hello, World!';
        this.snackVisibility = 'hidden';
    }
    SnackbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationService.notifier
            .pipe(tap(function (message) {
            _this.message = message,
                _this.snackVisibility = 'visible';
        }), switchMap(function (message) { return timer(3000); }) //se tiver dois ou mais subscribes ele da unsubscribe no antigo e faz um novo
        ).subscribe(function (timer) { return _this.snackVisibility = 'hidden'; });
    };
    SnackbarComponent = __decorate([
        Component({
            selector: 'mt-snackbar',
            templateUrl: './snackbar.component.html',
            styleUrls: ['./snackbar.component.css'],
            animations: [
                trigger('snack-visibility', [
                    state('hidden', style({
                        opacity: 0,
                        bottom: 0
                    })),
                    state('visible', style({
                        opacity: 1,
                        bottom: '30px'
                    })),
                    transition('hidden => visible', animate('500ms 0s ease-in')),
                    transition('visible => hidden', animate('500ms 0s ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [NotificationService])
    ], SnackbarComponent);
    return SnackbarComponent;
}());
export { SnackbarComponent };
//# sourceMappingURL=snackbar.component.js.map