import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsCourseRoutingModule } from './details-course-routing.module';
import { FormsModule } from '@angular/forms';
import { UtilityModule } from '../../utility.mod/utility.module';
import { NgxAgileSliderModule } from '../../ngx-agile-slider.mod/ngx-agile-slider.module';
import { WidgetsModule } from '../../widgets.mod/widgets.module';
import { SharedModule } from '../../shared.mod/shared.module';
import { DetailsCourseComponent } from './components/details-course.component';
import { FrameModule } from '../../frame.pck/frame.module';

@NgModule({
  declarations: [
    DetailsCourseComponent
  ],
  exports: [
    DetailsCourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule,
    DetailsCourseRoutingModule,
    NgxAgileSliderModule,
    WidgetsModule,
    SharedModule,
    FrameModule
  ]
})
export class DetailsCourseModule {
}
