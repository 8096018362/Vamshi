import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-empty',
    templateUrl: 'empty.component.html'
})

export class EmptyComponent {


    constructor(public _location: Location) { }

    goBack() {
        this._location.back();
    }

}