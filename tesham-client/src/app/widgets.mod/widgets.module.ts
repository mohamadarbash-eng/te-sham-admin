// Angular
import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { CourseWidgetComponent } from './course-widget/components/course-widget.component';
import { FormsModule }           from '@angular/forms';
import { UtilityModule }         from '../utility.mod/utility.module';
import { WhyWeWidgetComponent }   from './why-we-widget/components/why-we-widget.component';
import { EventWidgetComponent }   from './event-widget/components/event-widget.component';
import { DiplomaWidgetComponent }  from './diplom-widget/components/diploma-widget.component';
import { SharedModule } from '../shared.mod/shared.module';
import { RouterModule } from '@angular/router';
// App


@NgModule({
  declarations: [
    WhyWeWidgetComponent,
    EventWidgetComponent,
    CourseWidgetComponent,
    DiplomaWidgetComponent,
  ],
  exports: [
    CourseWidgetComponent,
    WhyWeWidgetComponent,
    EventWidgetComponent,
    DiplomaWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule,
    SharedModule,
    RouterModule
  ],
  providers: []
})
export class WidgetsModule { }
