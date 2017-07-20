import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  getCourses() {
    return   ['Course_1', 'Course_2', 'Course_3'];
  }

  constructor() { }

}
