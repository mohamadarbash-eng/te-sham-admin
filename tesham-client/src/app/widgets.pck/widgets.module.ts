// Angular
import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { CourseWidgetComponent } from './course-widget/course-widget.component';
import { FormsModule }           from '@angular/forms';
// App


@NgModule({
  declarations: [
    CourseWidgetComponent
  ],
  exports: [
    CourseWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class WidgetsModule { }
