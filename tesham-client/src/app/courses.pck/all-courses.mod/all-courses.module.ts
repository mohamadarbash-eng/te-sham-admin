import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCoursesRoutingModule } from './all-courses-routing.module';
import { FormsModule }             from '@angular/forms';
import { UtilityModule }           from '../../utility.mod/utility.module';
import { AllCoursesComponent }     from './components/all-courses.component';
import { NgxAgileSliderModule }    from '../../ngx-agile-slider.mod/ngx-agile-slider.module';
import { WidgetsModule }           from '../../widgets.mod/widgets.module';
import { SharedModule } from '../../shared.mod/shared.module';
import { FrameModule } from '../../frame.pck/frame.module';

@NgModule({
  declarations: [
    AllCoursesComponent
  ],
  exports: [
    AllCoursesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule,
    AllCoursesRoutingModule,
    NgxAgileSliderModule,
    WidgetsModule,
    FrameModule,
    SharedModule
  ]
})
export class AllCoursesModule { }
