"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var zoom_in_animation_1 = require("./../../shared/animations/zoom-in.animation");
var fade_in_animation_1 = require("./../../shared/animations/fade-in.animation");
var slide_in_left_animation_1 = require("./../../shared/animations/slide-in-left.animation");
var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            template: require('./team.component.html'),
            styles: [require('./team.component.scss')],
            animations: [
                zoom_in_animation_1.zoomInAnimation,
                fade_in_animation_1.fadeInAnimation,
                slide_in_left_animation_1.slideInLeftAnimation
            ],
            host: {
                '[@zoomInAnimation]': '',
                '[@fadeInAnimation]': '',
                '[@slideInLeftAnimation]': ''
            }
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map