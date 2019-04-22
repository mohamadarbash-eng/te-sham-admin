import { Component, OnInit } from '@angular/core';
import { CourseDataInterface, CourseInterface } from '../../../core.mod/interfaces/course-data-Interface.interface';
import { Store } from '@ngrx/store';
import { BreadcrumbPagesState } from '../../../utility.mod/breadcrumb-pages/store/breadcrumb-pages.reducer';
import { API_PATH, ProxyService } from '../../../core.mod/proxy/services/proxy.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { InitBreadcrumb } from '../../../utility.mod/breadcrumb-pages/store/breadcrumb-pages.action';

@Component({
  selector: 'te-app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.scss']
})
export class DetailsCourseComponent implements OnInit {
  public courseDetails: CourseInterface;
  public courseCount: number;

  constructor(private _store: Store<BreadcrumbPagesState>, proxyService: ProxyService, route: ActivatedRoute) {
 /*   route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        proxyService.getProxy(API_PATH.COURSE_DETAILS_API, null, {id: params.get('courseName')})
    )).subscribe((response: CourseDataInterface) => {
        this.courseDetails = response['courses'];
      });
      */
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
        item: 'SECONDARY',
        label: 'Homepage',
        linkTo: 'hello'
      },
      {
        item: 'SECONDARY',
        label: 'Homepage',
        linkTo: 'hello'
      },
      {
        item: 'SECONDARY',
        label: 'Homepage',
        linkTo: 'memo'
      },
      {
        item: 'SECONDARY',
        label: 'Homepage',
        linkTo: 'hello'
      }
    ];
    this._store.dispatch(new InitBreadcrumb({data: temp}));
  }

}
