import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course = {
    title: "The Complete Angular Course",
    rating: 4.759,
    students: 3012,
    price: 190.15,
    releaseDate: new Date(2016, 3, 1)
  }

  constructor() { }

  ngOnInit() {
  }

}
