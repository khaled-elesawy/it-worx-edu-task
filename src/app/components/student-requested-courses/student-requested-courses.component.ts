import { Component, OnInit } from '@angular/core';

import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-student-requested-courses',
  templateUrl: './student-requested-courses.component.html',
  styleUrls: ['./student-requested-courses.component.scss']
})
export class StudentRequestedCoursesComponent implements OnInit {


  studentRequestedCourses: Course[];



  constructor(private coursesService: CoursesService){}


  ngOnInit(){

    this.studentRequestedCourses = this.coursesService.getStudentCourses()

  }

}
