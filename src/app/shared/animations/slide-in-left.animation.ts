import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export const slideInLeftAnimation =
    trigger('slideInLeftAnimation', [

        // transition(':enter', animate(1000, keyframes([
        //     style({transform: 'translate3d(-80%, 0, 0)', opacity: 0}),
        //     style({transform: 'translate3d(0, 0, 0)', opacity: 1})      
        // ])))

        transition(':enter', [
            style({ opacity: 0, width: 0}),
            animate(600, style('*'))
        ])
    ])
