import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export const SUPPORTED_LANG: { [key: string]: {[key: string]: string }} = {
  en: {key: 'العربية', value: 'ar'},
  ar: {key: 'English', value: 'en'}
}

@Component({
  selector: 'te-app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent {
  public lang: { [key: string]: string };

  constructor(private translate: TranslateService) {
    this.lang = SUPPORTED_LANG[this.translate.currentLang];
  }

  public onSwitchLang(): void {
    this.translate.use(this.lang.value);
    this.lang = SUPPORTED_LANG[this.lang.value];
  }
}
