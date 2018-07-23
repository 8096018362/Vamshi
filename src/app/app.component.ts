import { Component, HostListener } from '@angular/core';
declare var $: any;
/**
 * Global varibles declare time value
 */
import { config } from './config';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public intervalValue;
    public timeOut;
    public loginStatus: boolean;
    constructor(public router: Router,
    ) {
        this.loginStatus = true;
        config.time = (config.time) / 1000;
        console.log(config.time)
    }

    ngOnInit() {
        this.timerMethod()
    }

    public timerValue = 0;
    @HostListener('click', ['$event.target'])
    public onClickBtn(btn) {
        this.timerMethod()
    }

    @HostListener('document:keydown', ['$event'])
    public onKeydownHandler(event: KeyboardEvent) {
        this.timerMethod()
    }

    timerMethod() {
        if (this.loginStatus) {
            clearInterval(this.intervalValue)
            this.timerValue = 0;
            this.intervalValue = setInterval(() => {
                this.timerValue++;
                if (this.timerValue == config.time) {
                    clearInterval(this.intervalValue)
                    $('#alertPopup').modal('show');
                }
            }, 1000)
        }
    }

    closePopup() {
        $('#alertPopup').modal('hide');
        clearInterval(this.intervalValue)
        console.log('go to logout page')
        this.loginStatus = false;
        // this.router.navigate(['/login']);
    }

    extendTimeOut() {
        $('#alertPopup').modal('hide');
        console.log('Extend the timeOut')
    }


}
