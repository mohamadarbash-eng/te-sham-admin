// Angular
import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
// App
import { AppComponent }         from './app.component';
import { FrameModule }          from './frame.pck/frame.module';
import { NgxAgileSliderModule } from './carousel/ngx-agile-slider.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FrameModule,
    NgxAgileSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
