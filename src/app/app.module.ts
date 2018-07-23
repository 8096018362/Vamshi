import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './user/course/course.component';
import { CatsComponent } from './user/cats/cats.component';
import { EmptyComponent } from './user/empty/empty.component';
import { childrenComponnet } from './childrens/childrens.component';
import { parentComponnet } from './parents/parents.component';

import { AppRoutingModule } from './app.routing';

import { CourseService } from './user/service/course-service';


import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CatsComponent,
    EmptyComponent,
    childrenComponnet,
    parentComponnet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
