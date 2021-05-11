import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRequestedCoursesComponent } from './student-requested-courses.component';

describe('StudentRequestedCoursesComponent', () => {
  let component: StudentRequestedCoursesComponent;
  let fixture: ComponentFixture<StudentRequestedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRequestedCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRequestedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
