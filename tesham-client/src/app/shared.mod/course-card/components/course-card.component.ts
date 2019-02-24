import { Component, Input, OnInit } from '@angular/core';
//import { CourseDataInterface }      from '../../../widgets.mod/course-widget/interfaces/CourseDataInterface.interface';

@Component({
  selector: 'te-app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input('courseData') course: any;

  constructor() {
  }

  ngOnInit() {
  }

}
