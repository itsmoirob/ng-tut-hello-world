import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course = {
    title: "The Complete Angular Course",
    rating: 84.7594654,
    students: 3012,
    price: 190.15,
    releaseDate: new Date(2016, 3, 1)
  }
  text: string = `This is some dummy text, I'm not sure what we are going to do with it just yet.` 

  constructor() { }

  ngOnInit() {
  }

}
