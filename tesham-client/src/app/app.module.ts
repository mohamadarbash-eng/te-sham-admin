// Angular
import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
// App
import { AppComponent }         from './app.component';
import { FrameModule }          from './frame.pck/frame.module';
import { frameRoutes }          from './frame.pck/frame.router';
import { RouterModule }         from '@angular/router';
import { appRoutes }            from './app-router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FrameModule,
    RouterModule.forRoot([
      ...appRoutes,
      ...frameRoutes
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
