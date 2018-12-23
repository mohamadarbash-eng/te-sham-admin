import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.mod/footer.component';
import { HeaderComponent } from './header.mod/header.component';
import { UtilityModule } from '../utility.pck/utility.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent

  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UtilityModule
  ],
  providers: [],
})
export class FrameModule { }
