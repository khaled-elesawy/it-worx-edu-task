import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentRequestedCoursesService {



  constructor(private httpClient: HttpClient) {

  }

  getStudentCourses(){
    return this.httpClient.get('assets/json-files/requests.json')
  }
}
