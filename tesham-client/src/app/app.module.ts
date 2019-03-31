// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
// App
import { AppComponent } from './app.component';
import { FrameModule } from './main.mod/frame.module';
import { frameRoutes } from './main.mod/frame.router';
import { appRoutes } from './app-router';
import { UtilityModule } from './utility.mod/utility.module';
import { CoreModule } from './core.mod/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FrameModule,
    CoreModule,
    UtilityModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    RouterModule.forRoot([
      ...appRoutes,
      ...frameRoutes
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
