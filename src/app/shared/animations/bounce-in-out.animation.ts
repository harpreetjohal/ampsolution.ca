import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export const bounceInOutAnimation =
    trigger('bounceInOutAnimation', [
        transition(':enter', [

            query(':self', style({ opacity: 0 }), {optional: true}),

            query(':self', stagger('400ms', [
                animate('1s ease-in', keyframes([
                    style({opacity: 0, transform: 'translate3d(0, -3000px, 0)', offset: 0}),
                    style({opacity: 0.5, transform: 'translate3d(0, 25px, 0)',  offset: 0.5}),
                    style({opacity: 1, transform: 'translate3d(0, -10px, 0)', offset: 0.75}),
                    style({opacity: 1, transform: 'translate3d(0, 5px, 0)', offset: .9}),
                    style({transform: 'none', offset: 1}),  
                ]))]), {optional: true})

            ]),
        transition(':leave', [

            query(':self', stagger('400ms', [
                animate('600ms cubic-bezier(1.000, 0.355, 0.610, 0.215)', keyframes([
                    style({opacity: 1, transform: 'translate3d(0, -10px, 0)', offset: 0}),
                    style({opacity: 1, transform: 'translate3d(0, 20px, 0)',  offset: 0.40}),
                    style({opacity: 0.5, transform: 'translate3d(0, 20px, 0)',  offset: 0.45}),
                    style({opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1}),
            ]))]), {optional: true})        

        ])
    ])