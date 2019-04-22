import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'te-app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {
  @Input('imgUrl') src: string;
  @Input('imgTitle') title: string;
  @Input('imgAlt') alt: string;
  constructor() {
  }

  ngOnInit() {
  }

}
