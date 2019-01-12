// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
// App
import { AppComponent }  from './app.component';
import { FrameModule }   from './frame.pck/frame.module';
import { frameRoutes }   from './frame.pck/frame.router';
import { appRoutes }     from './app-router';
import { UtilityModule } from './utility.pck/utility.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FrameModule,
    UtilityModule,
    RouterModule.forRoot([
      ...appRoutes,
      ...frameRoutes
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
