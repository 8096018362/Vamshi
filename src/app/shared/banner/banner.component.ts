import { Component } from '@angular/core'
import { CourseService } from '../../user/service/course-service';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html'
})

export class BannerComponent {
    public userReponce: any;
    public bannerResponce: any;

    constructor(
        public _courseService: CourseService
    ) {
        this.userReponce = JSON.parse(localStorage.getItem('APPUSERACCESSRESPONCE'))
        /**
         * geting banner responce based on used id
         */
        this.getBannerResponce(this.userReponce.userID);
    }

    getBannerResponce(id) {
        this._courseService.mockBannerData.subscribe(data => {
            this.bannerResponce = data;
        })

        /**
         * you should place like this in your code
         */
        // this.service.getUserbannerResponce(id).subscribe(data => {
        //      this.bannerResponce = data;
        // })
    }
}

