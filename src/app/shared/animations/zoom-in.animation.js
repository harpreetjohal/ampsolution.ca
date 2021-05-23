"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.zoomInAnimation = animations_1.trigger('zoomInAnimation', [
    animations_1.transition(':enter', [
        animations_1.query(':self', animations_1.style({
            opacity: 0,
            transform: 'scale3d(.3, .3, .3)',
        }), { optional: true }),
        animations_1.query(':self', animations_1.stagger('400ms', [
            animations_1.animate('1000ms cubic-bezier(0.5, 0, 0.25, 1)', animations_1.keyframes([
                animations_1.style({ opacity: 0, transform: 'scale3d(.8, .8, .8)', offset: 0 }),
                animations_1.style({ opacity: 1, offset: 0.5 }),
                animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, .1)', offset: 1.0 }),
            ]))
        ]), { optional: true })
    ]),
]);
//# sourceMappingURL=zoom-in.animation.js.map