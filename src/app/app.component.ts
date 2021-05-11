import { Component, OnInit } from '@angular/core';

import { Course } from './models/course.model';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'itworx-task';

}
