import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'te-app-why-we-widget',
  templateUrl: './why-we-widget.component.html',
  styleUrls: ['./why-we-widget.component.scss']
})
export class WhyWeWidgetComponent implements OnInit {
  @Input() withRuler = false;
  constructor() { }

  ngOnInit() {
  }

}
