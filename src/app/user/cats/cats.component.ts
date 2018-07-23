import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../service/course-service';
import { AppUserAccessResponse } from '../model/course-model';



@Component({
    selector: 'app-cats',
    templateUrl: 'cats.component.html'
})

export class CatsComponent {
    selectedApplication: AppUserAccessResponse;
    selectedObj;

    constructor(
        private route: ActivatedRoute,
        public _courseService: CourseService,
        public _location: Location
    ) {
        this.selectedObj = JSON.parse(localStorage.getItem('APPUSERACCESSRESPONCE'))
        this.selectedApplication = this.selectedObj.accessibleApps.find(application => {
            if (application.applicationID == 1) {
                return application;
            }
        })
    }

    goBack() {
        this._location.back();
    }

}