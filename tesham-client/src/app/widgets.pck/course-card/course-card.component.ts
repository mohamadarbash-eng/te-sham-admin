import { Component, Input, OnInit } from '@angular/core';
import { CourseDataInterface }      from '../CourseDataInterface.interface';

@Component({
  selector: 'te-app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input('courseData') course: CourseDataInterface;

  constructor() {
  }

  ngOnInit() {
  }

}
