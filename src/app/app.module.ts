import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoursesComponent } from './components/courses/courses.component';
import { HeaderComponent } from './components/header/header.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { CourseNameFilterPipe } from './pipes/course-name-filter.pipe';
import { StudentRequestedCoursesComponent } from './components/student-requested-courses/student-requested-courses.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProfileComponent } from './components/profile/profile.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { AppInterceptorService } from './services/app-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    SecondaryHeaderComponent,
    CourseNameFilterPipe,
    StudentRequestedCoursesComponent,
    ProfileComponent,
    ShortenPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PaginationModule,
    CarouselModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
