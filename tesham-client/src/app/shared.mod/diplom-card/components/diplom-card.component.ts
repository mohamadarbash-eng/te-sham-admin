import { Component, Input, OnInit } from '@angular/core';
//import { CourseDataInterface }      from '../../../widgets.mod/course-widget/interfaces/CourseDataInterface.interface';

@Component({
  selector: 'te-app-diplom-card',
  templateUrl: './diplom-card.component.html',
  styleUrls: ['./diplom-card.component.scss']
})
export class DiplomCardComponent implements OnInit {
  @Input('courseData') course: any;
  constructor() { }

  ngOnInit() {
  }

}
