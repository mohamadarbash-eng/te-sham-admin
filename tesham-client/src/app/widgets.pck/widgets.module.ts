// Angular
import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { CourseWidgetComponent } from './course-widget/course-widget.component';
import { FormsModule }           from '@angular/forms';
import { UtilityModule }         from '../utility.pck/utility.module';
import { CourseCardComponent } from './course-card/course-card.component';
import { WhyWeWidgetComponent } from './why-we-widget/why-we-widget.component';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { EventWidgetComponent } from './event-widget/event-widget.component';
// App


@NgModule({
  declarations: [
    CourseWidgetComponent,
    CourseCardComponent,
    WhyWeWidgetComponent,
    UpcomingEventComponent,
    EventWidgetComponent
  ],
  exports: [
    CourseWidgetComponent,
    WhyWeWidgetComponent,
    EventWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule
  ],
  providers: []
})
export class WidgetsModule { }
