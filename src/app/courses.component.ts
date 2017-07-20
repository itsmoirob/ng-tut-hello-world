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
<button class="btn btn-primary" [class.btn-success]="isActive">Save</button>
<button class="btn btn-primary" [style.backgroundColor] = "isActive ? 'green' : 'tomato'">Save</button>
<div (click)="onDiv()">
  <button class="btn btn-primary" (click)="onSave($event)" >Save</button>
</div>
<input  (keyup.enter)="onKeyUp()">
`
})

export class CoursesComponent {
  title = 'List of courses';
  imageUrl = ' https://lorempixel.com/400/200';
  courses: string[];
  isActive: boolean = false;

  constructor(private service: CoursesService, private sanitizer: DomSanitizer) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  sanitizeImg() {
    return this.sanitizer.bypassSecurityTrustUrl(this.imageUrl);
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('hi there');
    console.log($event);
  }

  onDiv() {
    console.log('Div clicked');
  }

  onKeyUp() {
    console.log('Enter key was pressed');
  }
}