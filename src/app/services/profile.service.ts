import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getStudentsProfile(){
    return this.httpClient.get('assets/json-files/students.json')
  }
}
