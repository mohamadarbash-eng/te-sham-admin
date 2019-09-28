import { Component, Input } from '@angular/core';
import { routes } from '../../../routes-model';
import { API_PATH, ProxyService } from '../../../core.mod/proxy/services/proxy.service';
import { CourseDataInterface } from '../../../core.mod/interfaces/course-data-Interface.interface';
import { DiplomaDataInterface, DiplomaInterface } from '../../../core.mod/interfaces/diploma-data-Interface.interface';

@Component({
  selector: 'te-app-diploma-widget',
  templateUrl: './diploma-widget.component.html',
  styleUrls: ['./diploma-widget.component.scss']
})
export class DiplomaWidgetComponent {
  @Input() diplomaData: Partial<DiplomaInterface>[];
  @Input() withRuler = false;
  public router = routes;
  constructor(private _proxyService: ProxyService) {
    this._proxyService.getProxy(API_PATH.COURSES_API, {offset: 0, limit: 3})
      .subscribe((response: CourseDataInterface[]) => {
        this.diplomaData = response['courses'];
      });
// TODO use it when backend is done
    /*this._proxyService.getProxy(API_PATH.COURSES_API, {offset: 0, limit: 3})
      .subscribe((response: DiplomaDataInterface[]) => {
        this.diplomaData = response['diploma'];
      });
  */
  }
}
