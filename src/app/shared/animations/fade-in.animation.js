"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.fadeInAnimation = animations_1.trigger('fadeInAnimation', [
    animations_1.transition(':enter', [
        animations_1.style({
            opacity: 0,
            transform: 'scale(0.9)'
        }),
        animations_1.animate('1s ease-in', animations_1.style({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
]);
//# sourceMappingURL=fade-in.animation.js.map