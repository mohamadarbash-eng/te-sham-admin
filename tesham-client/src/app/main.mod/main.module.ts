// Angular
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
// App
import { FooterComponent }      from './footer/components/footer.component';
import { HeaderComponent }      from './header/components/header.component';
import { UtilityModule }        from '../utility.mod/utility.module';
import { IndexComponent }       from './index/components/index.component';
import { NgxAgileSliderModule } from '../ngx-agile-slider.mod/ngx-agile-slider.module';
import { WidgetsModule }        from '../widgets.mod/widgets.module';
import { RouterModule }         from '@angular/router';


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
    RouterModule,
    NgxAgileSliderModule,
    WidgetsModule
  ],
  providers: [],
})
export class MainModule { }
