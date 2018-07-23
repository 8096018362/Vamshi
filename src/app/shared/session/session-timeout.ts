import { Component } from '@angular/core'

@Component({
    selector: 'app-session',
    templateUrl: 'session-timeout.html'
})

export class SessionComponent {
    TimerValue = 0;

    timeValue(val) {
        this.TimerValue = val;
        // popup
    }


}