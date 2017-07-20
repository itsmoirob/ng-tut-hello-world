import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'courses',
  template: `
<h2>Courses</h2>
<img src="{{sanitizeImg()}}">
<img [src]="sanitizeImg()">
<h3>{{getTitle()}}</h3>
<ul>
  <li *ngFor="let course of courses">{{course}}</li>
</ul>
`
})

export class CoursesComponent {
  title = 'List of courses';
  imageUrl=' https://lorempixel.com/400/200';
  courses: string[];

  constructor( private service: CoursesService, private sanitizer: DomSanitizer ) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  sanitizeImg () {
     return this.sanitizer.bypassSecurityTrustUrl(this.imageUrl);
     }
}