import { Component, OnInit } from '@angular/core';
import { routes } from '../../../routes-model';


const listItem = {
  data: [
    {
      NavText: 'Home',
      navLink: 'home'
    },
    {
      NavText: 'Courses',
      navLink: 'courses'
    },
    {
      NavText: 'Diplomas',
      navLink: 'diplomas'
    },
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
  public _routes = routes;
  public listItem = listItem;

  constructor() {
  }

  ngOnInit() {
  }

}
