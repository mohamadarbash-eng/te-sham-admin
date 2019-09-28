import { Component, Input } from '@angular/core';

@Component({
  selector: 'te-app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent {
  @Input('imgUrl') src: string;
  @Input('imgTitle') title: string;
  @Input('imgAlt') alt: string;
}
