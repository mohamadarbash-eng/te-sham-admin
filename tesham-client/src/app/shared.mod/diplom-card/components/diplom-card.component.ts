import { Component, Input, OnInit } from '@angular/core';
import { CourseInterface } from '../../../core.mod/interfaces/course-data-Interface.interface';
import { DiplomaInterface } from '../../../core.mod/interfaces/diploma-data-Interface.interface';

@Component({
  selector: 'te-app-diplom-card',
  templateUrl: './diplom-card.component.html',
  styleUrls: ['./diplom-card.component.scss']
})
export class DiplomCardComponent implements OnInit {
  @Input('data') diploma: DiplomaInterface;
  @Input() route: string;
  constructor() { }

  ngOnInit() {
  }

}
