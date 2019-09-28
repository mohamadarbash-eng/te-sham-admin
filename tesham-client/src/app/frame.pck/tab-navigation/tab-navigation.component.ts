import { Component, Input } from '@angular/core';

@Component({
  selector: 'te-app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent {
  @Input('tabsContent') tabs: {title: string, img: string; checked: boolean, value: string}[];
}
