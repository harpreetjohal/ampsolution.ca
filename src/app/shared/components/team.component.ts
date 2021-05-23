import { Component } from "@angular/core";
import { zoomInAnimation } from './../../shared/animations/zoom-in.animation';
import { fadeInAnimation } from './../../shared/animations/fade-in.animation';
import { slideInLeftAnimation } from './../../shared/animations/slide-in-left.animation';

@Component({
    templateUrl: './team.component.html',
    styles: ['./team.component.scss'],
    animations: [
        zoomInAnimation,
        fadeInAnimation,
        slideInLeftAnimation
    ],
    host: {
        '[@zoomInAnimation]': '',
        '[@fadeInAnimation]': '',
        '[@slideInLeftAnimation]': ''
    }
})
export class TeamComponent {

    public constructor() {
    }

}
