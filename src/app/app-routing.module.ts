import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './components/courses/courses.component';
import { StudentRequestedCoursesComponent } from './components/student-requested-courses/student-requested-courses.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'student-requested-courses', component: StudentRequestedCoursesComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
