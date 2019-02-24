import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InitBreadcrumb } from '../../../utility.mod/breadcrumb-pages/store/breadcrumb-pages.action';
import { BreadcrumbPagesState } from '../../../utility.mod/breadcrumb-pages/store/breadcrumb-pages.reducer';
@Component({
  selector: 'te-app-all-courses-widget',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {

  constructor(private store: Store<BreadcrumbPagesState>) {
  }

  ngOnInit() {
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
