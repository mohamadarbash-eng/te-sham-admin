import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllDiplomasRoutingModule } from './all-diplomas-routing.module';
import { FormsModule } from '@angular/forms';
import { UtilityModule } from '../../utility.mod/utility.module';
import { NgxAgileSliderModule } from '../../ngx-agile-slider.mod/ngx-agile-slider.module';
import { WidgetsModule } from '../../widgets.mod/widgets.module';
import { SharedModule } from '../../shared.mod/shared.module';
import { AllDiplomasComponent } from './components/all-diplomas.component';
import { FrameModule } from '../../frame.pck/frame.module';

@NgModule({
  declarations: [
    AllDiplomasComponent
    ],
  exports: [
    AllDiplomasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule,
    AllDiplomasRoutingModule,
    NgxAgileSliderModule,
    WidgetsModule,
    SharedModule,
    FrameModule
  ]
})
export class AllDiplomasModule { }
