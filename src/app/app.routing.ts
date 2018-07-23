import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CourseComponent } from './user/course/course.component';
import { CatsComponent } from './user/cats/cats.component';
import { EmptyComponent } from './user/empty/empty.component';
import { childrenComponnet } from './childrens/childrens.component';
import { parentComponnet } from './parents/parents.component';


const routes: Routes = [
    { path: '', redirectTo: '/course', pathMatch: 'full' },
    { path: 'course', component: CourseComponent },
    { path: 'course/1', component: CatsComponent },
    { path: 'empty', component: EmptyComponent },
    { path: 'childrens', component: childrenComponnet },
    { path: 'parents', component: parentComponnet },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
