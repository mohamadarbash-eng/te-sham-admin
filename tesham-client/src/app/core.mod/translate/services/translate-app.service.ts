import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateAppService {

  constructor(private translate: TranslateService) {
  }

  public prepareLang(): void {
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang());
    this.translate.onLangChange.subscribe((lang: any) => {
      console.log(lang);
      if (lang.lang === 'ar') {
        document.body.dir = 'rtl';
      } else {
        document.body.dir = 'ltr';
      }
      document.body.setAttribute('lang', lang.lang);
    });
  }

}
