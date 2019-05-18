import { Component, Input, OnInit } from '@angular/core';
import { CourseInterface } from '../../../core.mod/interfaces/course-data-Interface.interface';
import { routes } from '../../../routes-model';

@Component({
  selector: 'te-app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input('data') course: CourseInterface;
  @Input() route: string;

  constructor() {
  }

  ngOnInit() {
  }

}
