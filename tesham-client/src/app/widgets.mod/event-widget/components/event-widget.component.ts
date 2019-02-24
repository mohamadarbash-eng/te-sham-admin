import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'te-app-event-widget',
  templateUrl: './event-widget.component.html',
  styleUrls: ['./event-widget.component.scss']
})
export class EventWidgetComponent implements OnInit {
  @Input() withRuler = false;
  constructor() { }

  ngOnInit() {
  }

}
