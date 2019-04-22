import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'te-app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent implements OnInit {
  @Input('tabsContent') tabs: {title: string, img: string; checked: boolean, value: string}[];

  constructor() {
  }

  ngOnInit() {
  }

}
