import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InitBreadcrumb } from '../../../utility.mod/breadcrumb-pages/store/breadcrumb-pages.action';
import { BreadcrumbPagesState } from '../../../utility.mod/breadcrumb-pages/store/breadcrumb-pages.reducer';
import { API_PATH, ProxyService } from '../../../core.mod/proxy/services/proxy.service';
import {
  CourseDataInterface,
  CourseInterface
} from '../../../core.mod/interfaces/course-data-Interface.interface';
import { routes } from '../../../routes-model';

@Component({
  selector: 'te-app-all-courses-widget',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
public courseList: Partial<CourseInterface>[];
  public routes = routes;
  constructor(private _store: Store<BreadcrumbPagesState>, private _proxyService: ProxyService) {
    this._proxyService.getProxy(API_PATH.COURSES_API)
      .subscribe((response: CourseDataInterface[]) => {
        this.courseList = response['courses'];
      });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    const temp = [
      {
        item: 'PRIMARY',
        label: 'Homepage',
        route: '/'
      },
      {
        item: 'PRIMARY',
        label: 'Memo',
        route: null
      },

      {
        label: 'Homepage',
        linkTo: 'hello'
      },
      {
        label: 'Homepage',
        linkTo: 'hello'
      },
      {
        label: 'Homepage',
        linkTo: 'memo'
      },
      {
        label: 'Homepage',
        linkTo: 'hello'
      }
    ];
    this._store.dispatch(new InitBreadcrumb({data: temp}));
  }
}
