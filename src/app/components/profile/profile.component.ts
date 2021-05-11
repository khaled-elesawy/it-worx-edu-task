import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Subscription } from 'rxjs';

import { StudentRequestedCoursesService } from 'src/app/services/student-requested-courses.service';
import { Student } from 'src/app/models/student.model';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  // storing the student info
  allStudents: Student[] = [];
  requiredStudent: Student;

  // storing the individual student request
  allStudentsRequests: any = [];
  requiredStudentRequest;

  requestedCourses: Course[] = []

  allCourses: Course[] = [];
  totalCost: number = 0;

  // storing subscriptions
  profileSub: Subscription;
  studentsRequestsSub: Subscription;



  constructor(private profileService: ProfileService, private studentRequestedCoursesService: StudentRequestedCoursesService, private coursesService: CoursesService) { }

  ngOnInit(): void {


    this.profileSub = this.profileService.getStudentsProfile().subscribe(
      (studentsArray: Student[]) => {
        this.allStudents = studentsArray;
      }
    )

    this.studentsRequestsSub = this.studentRequestedCoursesService.getStudentCourses()
    .subscribe(
      requests => {
        this.allStudentsRequests = requests
      }
    )

    this.coursesService.getCourses().subscribe(courses => {
      this.allCourses = courses;
    });

  }

  onSubmit(form: HTMLFormElement){
    // getting student personal info
    let id = form.value.idInput;
    this.requiredStudent = this.allStudents.find(s => s.Id === parseInt(id));


    // getting single student requested courses
    const studentRequest = this.allStudentsRequests.filter(r => r.StudentId === parseInt(id));

    //getting courses price & requested courses
    studentRequest[0].Courses.forEach((course: Course) => {
      const innerCourse = this.allCourses.find(c => c.CourseId === course.CourseId);
      this.totalCost += innerCourse.CoursePrice;
      this.requestedCourses.push(innerCourse)
    });

    // reseting form input
    form.reset()

  }

  // cancel subscription
  ngOnDestroy(){
    this.profileSub.unsubscribe();
    this.studentsRequestsSub.unsubscribe()
  }

}
