import { Component, Input } from '@angular/core';
import { CourseDataInterface, CourseInterface } from '../../../core.mod/interfaces/course-data-Interface.interface';
import { API_PATH, ProxyService } from '../../../core.mod/proxy/services/proxy.service';
import { routes } from '../../../routes-model';


@Component({
  selector: 'te-app-course-widget',
  templateUrl: './course-widget.component.html',
  styleUrls: ['./course-widget.component.scss']
})
export class CourseWidgetComponent {
  @Input() courseList: Partial<CourseInterface>[];
  @Input() withRuler = false;
  public router = routes;

  constructor(private _proxyService: ProxyService) {
    this._proxyService.getProxy(API_PATH.COURSES_API, {offset: 0, limit: 3})
      .subscribe((response: CourseDataInterface[]) => {
        this.courseList = response['courses'];
      });
  }
}
