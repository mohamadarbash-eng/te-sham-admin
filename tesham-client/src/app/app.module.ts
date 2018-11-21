import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './frame.pck/header.mod/header.component';
import { PipeTranslatePipe } from './utility.pck/pipes/pipe-translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PipeTranslatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
