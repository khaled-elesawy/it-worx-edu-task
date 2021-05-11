import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Course } from '../../models/course.model';
import { CoursesService } from 'src/app/services/courses.service';
import { DurationFilter, CategoryFilter, DifficultyFilter, IFilter } from 'src/app/models/filter.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  coursesSub: Subscription;
  filteredCourses: Course[] = [];
  filteredCourseName: string = '';
  recentUpdates = [];
  addedCourses: Course[] = []

  // ngx bootstrap pagination
  totalItems: number = 64;
  currentPage: number = 4;
  currentPageSecond: number  ;
  smallnumPages: number = 0;

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  // left section multiple filter
  durationFilters: Array<DurationFilter> = [];
  categoryFilters: Array<CategoryFilter> = [];
  difficultyFilters: Array<DifficultyFilter> = [];

  selectedDurations: Array<DifficultyFilter> = [];
  selectedCategories: Array<CategoryFilter> = [];
  selectedDifficulties: Array<DifficultyFilter> = [];


  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    // left section multiple filter
    this.durationFilters = [
      new DurationFilter('Less Than 2 Hours', 0, 1, this.selectedDurations),
      new DurationFilter('From 2 To 10 Hours', 2, 10, this.selectedDurations),
      new DurationFilter('More Than 10 Hours', 11, Infinity, this.selectedDurations)
    ];
    this.categoryFilters = [
      new CategoryFilter('IT & Software', this.selectedCategories, []),
      new CategoryFilter('Math', this.selectedCategories, []),
      new CategoryFilter('Finance & Acounting', this.selectedCategories, []),
      new CategoryFilter('Others', this.selectedCategories, ['IT & Software', 'Math', 'Finance & Acounting'])
    ];
    this.difficultyFilters = [
      new DifficultyFilter('Beginner', this.selectedDifficulties),
      new DifficultyFilter('Intermediate', this.selectedDifficulties),
      new DifficultyFilter('Expert', this.selectedDifficulties)
    ];

    // getting courses array
    this.coursesSub = this.coursesService.getCourses().subscribe((coursesArray: Course[]) => {
      this.courses = coursesArray;
      this.filteredCourses = coursesArray;
    });


    // getting recent-updates array
    this.recentUpdates = this.coursesService.getRecentUpdates();
  }

  // filter method
  onFilter(event: any, filter: IFilter) {
    if (event.target.checked) {
      filter.add();
    } else {
      filter.remove();
    }

    this.filteredCourses = this.courses.filter(course => {
      return this.filterDuration(course) && this.filterCategory(course) && this.filterDifficulty(course);
    });
  }

  // duration filter method
  filterDuration(course: Course): boolean {
    if (this.selectedDurations.length) {
      return this.selectedDurations.some(f => f.handler(course[f.propertyName]));
    }

    return true;
  }

  // category filter method
  filterCategory(course: Course): boolean {
    if (this.selectedCategories.length) {
      return this.selectedCategories.some(f => f.handler(course[f.propertyName]));
    }

    return true;
  }

  // difficulty filter method
  filterDifficulty(course: Course): boolean {
    if (this.selectedDifficulties.length) {
      return this.selectedDifficulties.some(f => f.handler(course[f.propertyName]));
    }

    return true;
  }

  //adding new course
  onAddCourse(course: Course){
    this.coursesService.addCourse(course)

  }



  ngOnDestroy(){
    this.coursesSub.unsubscribe()
  }

}
