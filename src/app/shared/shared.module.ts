import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component'
import { SessionComponent } from './session/session-timeout'

@NgModule({
    declarations: [BannerComponent, SessionComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [SessionComponent],
    exports: [BannerComponent, SessionComponent]
})
export class SharedModule { }
