import { Component, Input } from '@angular/core';

@Component({
  selector: 'te-app-event-widget',
  templateUrl: './event-widget.component.html',
  styleUrls: ['./event-widget.component.scss']
})
export class EventWidgetComponent {
  @Input() withRuler = false;


}
