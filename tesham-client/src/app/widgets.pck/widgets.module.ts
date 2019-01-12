// Angular
import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { CourseWidgetComponent } from './course-widget/course-widget.component';
import { FormsModule }           from '@angular/forms';
import { UtilityModule }         from '../utility.pck/utility.module';
import { CourseCardComponent } from './course-card/course-card.component';
// App


@NgModule({
  declarations: [
    CourseWidgetComponent,
    CourseCardComponent
  ],
  exports: [
    CourseWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule
  ],
  providers: []
})
export class WidgetsModule { }
