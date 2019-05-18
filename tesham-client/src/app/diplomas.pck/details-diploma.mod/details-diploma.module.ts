import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsDiplomaRoutingModule } from './details-diploma-routing.module';
import { FormsModule } from '@angular/forms';
import { UtilityModule } from '../../utility.mod/utility.module';
import { NgxAgileSliderModule } from '../../ngx-agile-slider.mod/ngx-agile-slider.module';
import { WidgetsModule } from '../../widgets.mod/widgets.module';
import { SharedModule } from '../../shared.mod/shared.module';
import { DetailsDiplomaComponent } from './components/details-diploma.component';
import { FrameModule } from '../../frame.pck/frame.module';

@NgModule({
  declarations: [
    DetailsDiplomaComponent
  ],
  exports: [
    DetailsDiplomaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule,
    DetailsDiplomaRoutingModule,
    NgxAgileSliderModule,
    WidgetsModule,
    SharedModule,
    FrameModule
  ]
})
export class DetailsDiplomaModule {
}
