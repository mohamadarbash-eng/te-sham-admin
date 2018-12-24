import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipeTranslatePipe } from './pipes/pipe-translate.pipe';
import { AppVersionComponent } from './app-version/app-version.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
  declarations: [
    PipeTranslatePipe,
    AppVersionComponent,
    SocialIconsComponent
  ],
  exports: [
    PipeTranslatePipe,
    AppVersionComponent,
    SocialIconsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class UtilityModule { }
