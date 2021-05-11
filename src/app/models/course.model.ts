export class Course {
    CourseId: number;
    CourseName: string;
    CoursePrice: number;
    AvailableSeats: number;
    CourseImg: string;
    courseLevel: string;
    CourseDuration: number;
    CourseCategory: string;

  constructor(course: {
    CourseId?: number;
    CourseName?: string;
    CoursePrice?: number;
    AvailableSeats?: number;
    CourseImg?: string;
    courseLevel?: string;
    CourseDuration?: number;
    CourseCategory?: string;

  }){
      if(course){
          this.CourseId = course.CourseId;
          this.CourseName = course.CourseName;
          this.CoursePrice = course.CoursePrice;
          this.AvailableSeats = course.AvailableSeats;
          this.CourseImg = course.CourseImg;
          this.courseLevel = course.courseLevel
          this.CourseDuration = course.CourseDuration;
          this.CourseCategory = course.CourseCategory;
      }

  }
}
