import { Component, OnInit } from '@angular/core';
import { Store, select, } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { SUPPORTED_LANG } from '../../lang-switcher/lang-switcher.component';

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
  public isArabicLang: boolean;

  constructor(private langService: TranslateService, private _store: Store<{ breadcrumb: { data: any } }>) {
    this.langService.onLangChange.subscribe((lang: any) => {
      this.isArabicLang = lang.lang === SUPPORTED_LANG['en'].value;
      console.log(lang.lang);
    });
  }

  ngOnInit() {
    this._store.pipe(select('breadcrumb')).subscribe((data) => {
      if (data) {
        this.breadcrumbData = data && data.data;
      }
    });
  }

  public onClickScrollTo(elementID: string) {
    const element = document.getElementById(elementID);
    if (element) {
      element.scrollIntoView();
    }
  }
}
