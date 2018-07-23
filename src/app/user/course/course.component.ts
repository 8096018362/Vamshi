import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../service/course-service';
import { AppUserAccessResponse } from '../model/course-model';

@Component({
    selector: 'app-course',
    templateUrl: 'course.html'
})

export class CourseComponent {

    appUserAccessResponse: AppUserAccessResponse;
    disabledCourseList: any;
    hoverData: any;
    Scourse: any;
    applicationClick: any;

    constructor(
        public router: Router,
        public _courseService: CourseService,

    ) {
        this._courseService.mockData.subscribe(data => {
            this.appUserAccessResponse = data;
            localStorage.setItem('APPUSERACCESSRESPONCE', JSON.stringify(this.appUserAccessResponse))
        });
    }


    noAccessCourseData(obj) {
        this.hoverData = obj;
    }

    selectedApplication(appData) {
        this.applicationClick = appData;

        if (appData.applicationID == 1) {
            const link = ['/course', appData.applicationID];
            this.router.navigate(link);
        } else {
            const link = ['/empty'];
            this.router.navigate(link);
        }

    }

    applicationData(appData) {
        this.hoverData = appData;
        if (!appData) {
            this.applicationClick = '';
        }
    }

}

