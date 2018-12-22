// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// App
import { AppComponent } from './app.component';
import { FrameModule } from './frame.pck/frame.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FrameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
