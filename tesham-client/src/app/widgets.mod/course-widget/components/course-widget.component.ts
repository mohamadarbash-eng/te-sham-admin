import { Component, Input, OnInit } from '@angular/core';
import { CourseDataInterface } from '../interfaces/CourseDataInterface.interface';
import { API_PATH, ProxyService } from '../../../core.mod/proxy/services/proxy.service';


@Component({
  selector: 'te-app-course-widget',
  templateUrl: './course-widget.component.html',
  styleUrls: ['./course-widget.component.scss']
})
export class CourseWidgetComponent implements OnInit {
  @Input() coursesData: Partial<CourseDataInterface>[];
  @Input() withRuler = false;

  constructor(private _proxyService: ProxyService) {
    this._proxyService.getProxy(API_PATH.COURSES_API)
      .subscribe((courses: CourseDataInterface[]) => {
        console.log(courses);
        this.coursesData = courses;
      });
  }

  ngOnInit() {


  }

}
