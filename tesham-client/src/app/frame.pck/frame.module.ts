// Angular
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
// App
import { FooterComponent }      from './footer.mod/footer.component';
import { HeaderComponent }      from './header.mod/header.component';
import { UtilityModule }        from '../utility.pck/utility.module';
import { IndexComponent }       from './index.mod/index.component';
import { NgxAgileSliderModule } from '../carousel/ngx-agile-slider.module';
import { WidgetsModule }        from '../widgets.pck/widgets.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    IndexComponent

  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UtilityModule,
    NgxAgileSliderModule,
    WidgetsModule
  ],
  providers: [],
})
export class FrameModule { }
