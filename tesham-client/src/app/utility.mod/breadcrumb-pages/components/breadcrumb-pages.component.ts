import { Component, OnInit } from '@angular/core';
import { Store, select, } from '@ngrx/store';

export enum itemType {
  primary = 'PRIMARY',
  secondary = 'SECONDARY'
}

@Component({
  selector: 'te-app-breadcrumb-pages',
  templateUrl: './breadcrumb-pages.component.html',
  styleUrls: ['./breadcrumb-pages.component.scss']
})
export class BreadcrumbPagesComponent implements OnInit {
  public breadcrumbData: any;
  public itemType = itemType;

  constructor(private _store: Store<{ breadcrumb: { data: any } }>) {

  }

  ngOnInit() {
    this._store.pipe(select('breadcrumb')).subscribe((data) => {
      if (data) {
        this.breadcrumbData = data && data.data;
      }
    }).unsubscribe();
  }

  public onClickScrollTo(elementID: string) {
    const element = document.getElementById(elementID);
    if (element) {
      element.scrollIntoView();
    }
  }
}
