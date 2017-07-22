import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'

})

export class CoursesComponent {
  title = 'List of courses';
  imageUrl = ' https://lorempixel.com/400/200';
  courses: string[];
  isActive: boolean = true;

  constructor(private service: CoursesService, private sanitizer: DomSanitizer) {
    this.courses = service.getCourses();
  }

  changeIsActive(): void {
    this.isActive = !this.isActive;
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

  onKeyUp1($event) {
    console.log($event.target.value);

  }
  onKeyUp2(varName) {
    console.log(varName);
  }

  myOtherVar: string = 'My other var';
  myOtherVar1: string = 'My other var 1';
  myOtherVar2: string = 'My other var 2';
  onKeyUp3() {
    console.log(this.myOtherVar);
  }
  onKeyUp4() {
    console.log(this.myOtherVar1);
  }
  onKeyUp5() {
    console.log(this.myOtherVar2);
  }
}