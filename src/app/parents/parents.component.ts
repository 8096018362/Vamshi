import { Component, ViewChild } from '@angular/core';
import { SessionComponent } from '../shared/session/session-timeout'
@Component({
    selector: 'app-parents',
    templateUrl: 'parents.component.html'
})

export class parentComponnet {
    @ViewChild(SessionComponent)
    public _sessionComponent: SessionComponent;

    
    TestMethod() {
        this._sessionComponent.timeValue(0)
        setTimeout(() => {
            this._sessionComponent.timeValue(15)
        }, 4000)
    }

}