"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.bounceInOutAnimation = animations_1.trigger('bounceInOutAnimation', [
    animations_1.transition(':enter', [
        animations_1.query(':self', animations_1.style({ opacity: 0 }), { optional: true }),
        animations_1.query(':self', animations_1.stagger('400ms', [
            animations_1.animate('1s ease-in', animations_1.keyframes([
                animations_1.style({ opacity: 0, transform: 'translate3d(0, -3000px, 0)', offset: 0 }),
                animations_1.style({ opacity: 0.5, transform: 'translate3d(0, 25px, 0)', offset: 0.5 }),
                animations_1.style({ opacity: 1, transform: 'translate3d(0, -10px, 0)', offset: 0.75 }),
                animations_1.style({ opacity: 1, transform: 'translate3d(0, 5px, 0)', offset: .9 }),
                animations_1.style({ transform: 'none', offset: 1 }),
            ]))
        ]), { optional: true })
    ]),
    animations_1.transition(':leave', [
        animations_1.query(':self', animations_1.stagger('400ms', [
            animations_1.animate('600ms cubic-bezier(1.000, 0.355, 0.610, 0.215)', animations_1.keyframes([
                animations_1.style({ opacity: 1, transform: 'translate3d(0, -10px, 0)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.40 }),
                animations_1.style({ opacity: 0.5, transform: 'translate3d(0, 20px, 0)', offset: 0.45 }),
                animations_1.style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1 }),
            ]))
        ]), { optional: true })
    ])
]);
//# sourceMappingURL=bounce-in-out.animation.js.map