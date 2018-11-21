import { Component, OnInit } from '@angular/core';

const listItem = {
  data: [
    {NavText: 'Home'},
    {NavText: 'Courses'},
    {
      NavText: 'Blog', SubResources: [
        {NavText: 'How we Are'},
        {NavText: 'Instructors'},
        {NavText: 'How we Are'},
        {NavText: 'Instructors'}
      ]
    },
    {
      NavText: 'About', SubResources: [
        {NavText: 'How we Are'},
        {NavText: 'Instructors'},
      ]
    },
  ],
  type: 'NAV'
};

@Component({
  selector: 'te-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public listItem = listItem;

  constructor() {
  }

  ngOnInit() {
  }

}
