import { Component } from '@angular/core';
import 'materialize-css';
import { TranslateAppService } from './core.mod/translate/services/translate-app.service';

@Component({
  selector: 'te-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tesham-client';

  constructor(private translateAppService: TranslateAppService) {
    this.translateAppService.prepareLang();
  }
}
