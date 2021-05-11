import { TestBed } from '@angular/core/testing';

import { StudentRequestedCoursesService } from './student-requested-courses.service';

describe('StudentRequestedCoursesService', () => {
  let service: StudentRequestedCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentRequestedCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
