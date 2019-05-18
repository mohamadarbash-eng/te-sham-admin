import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InitBreadcrumb } from '../../../utility.mod/breadcrumb-pages/store/breadcrumb-pages.action';
import { BreadcrumbPagesState } from '../../../utility.mod/breadcrumb-pages/store/breadcrumb-pages.reducer';
import { API_PATH, ProxyService } from '../../../core.mod/proxy/services/proxy.service';
import {
  DiplomaInterface
} from '../../../core.mod/interfaces/diploma-data-Interface.interface';
import { CourseDataInterface } from '../../../core.mod/interfaces/course-data-Interface.interface';
import { routes } from '../../../routes-model';

@Component({
  selector: 'te-app-all-courses-widget',
  templateUrl: './all-diplomas.component.html',
  styleUrls: ['./all-diplomas.component.scss']
})
export class AllDiplomasComponent implements OnInit {
  public diplomaList: Partial<DiplomaInterface>[];
  public routes = routes;
  constructor(private store: Store<BreadcrumbPagesState>, private _proxyService: ProxyService) {
    this._proxyService.getProxy(API_PATH.COURSES_API)
      .subscribe((response: CourseDataInterface[]) => {
        this.diplomaList = response['courses'];
      });
/*    this._proxyService.getProxy(API_PATH.DIPLOMAS_API)
      .subscribe((response: DiplomaDataInterfaceInterface[]) => {
        this.diplomaList = response['diplomas'];
      });*/
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
    this.store.dispatch(new InitBreadcrumb({data: temp}));
  }
}
