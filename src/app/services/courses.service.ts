import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  selectedCourses :Course[] = []
  allCourses: Course[] = []

  private updates = [
    {
      'imgPath': '/assets/images/recent-updates.png',
      'userPosts': 'Karim Mostafa Post in Learning Powerful mental course',
      'time': '3 min ago.'
    },
    {
      'imgPath': '/assets/images/recent-updates.png',
      'userPosts': 'Karim Mostafa Post in Learning Powerful mental course',
      'time': '3 min ago.'
    },
    {
      'imgPath': '/assets/images/recent-updates.png',
      'userPosts': 'Karim Mostafa Post in Learning Powerful mental course',
      'time': '3 min ago.'
    },
    {
      'imgPath': '/assets/images/recent-updates.png',
      'userPosts': 'Karim Mostafa Post in Learning Powerful mental course',
      'time': '3 min ago.'
    },
    {
      'imgPath': '/assets/images/recent-updates.png',
      'userPosts': 'Karim Mostafa Post in Learning Powerful mental course',
      'time': '3 min ago.'
    },
  ]

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('assets/json-files/courses.json');
  }
  getRecentUpdates(){
    return this.updates.slice()
  }


  getStudentCourses(){
    return this.selectedCourses.slice()
  }
  addCourse(course){
    this.selectedCourses.push(course)
  }
}
