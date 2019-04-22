// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
// App
import { AppComponent } from './app.component';
import { frameRoutes } from './main.mod/main.router';
import { appRoutes } from './app-router';
import { UtilityModule } from './utility.mod/utility.module';
import { CoreModule } from './core.mod/core.module';
import { AuthGuards } from './core.mod/guards/auth-guards';
import { FrameModule } from './frame.pck/frame.module';
import { MainModule } from './main.mod/main.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    CoreModule,
    FrameModule,
    UtilityModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    RouterModule.forRoot([
      ...appRoutes,
      ...frameRoutes
    ])
  ],
  providers: [AuthGuards],
  bootstrap: [AppComponent]
})
export class AppModule {
}
