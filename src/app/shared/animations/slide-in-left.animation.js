"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.slideInLeftAnimation = animations_1.trigger('slideInLeftAnimation', [
    // transition(':enter', animate(1000, keyframes([
    //     style({transform: 'translate3d(-80%, 0, 0)', opacity: 0}),
    //     style({transform: 'translate3d(0, 0, 0)', opacity: 1})      
    // ])))
    animations_1.transition(':enter', [
        animations_1.style({ opacity: 0, width: 0 }),
        animations_1.animate(600, animations_1.style('*'))
    ])
]);
//# sourceMappingURL=slide-in-left.animation.js.map