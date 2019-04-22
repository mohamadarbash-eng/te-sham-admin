import { Component, Input, OnInit } from '@angular/core';
import { routes } from '../../../routes-model';

@Component({
  selector: 'te-app-diplom-widget',
  templateUrl: './diplom-widget.component.html',
  styleUrls: ['./diplom-widget.component.scss']
})
export class DiplomWidgetComponent implements OnInit {
  @Input() coursesData: any;
  @Input() withRuler = false;
  public router = routes;
  constructor() { }

  ngOnInit() {
    this.coursesData = [{
      imageAlt: 'imageAlt',
      imageUrl: 'course_1.jpg',
      title: 'English Grammar',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis',
      category: 'Art & Design',
      price: 15000,
      rating: 4.3
    }, {
      title: 'English Grammar',
      imageAlt: 'imageAlt',
      imageUrl: 'course_3.jpg',
      shortDescription: 'Lorem ipsum dolor sit amet, nsectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis',
      category: 'Art & Design',
      price: 15000,
      rating: 4.3
    }, {
      imageAlt: 'imageAlt',
      imageUrl: 'course_2.jpg',
      title: 'English Grammar',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis',
      category: 'Art & Design',
      price: 15000,
      rating: 4.3
    }];
  }

}
