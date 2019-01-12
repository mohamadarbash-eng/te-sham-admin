import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { PipeTranslatePipe }    from './pipes/pipe-translate.pipe';
import { AppVersionComponent }  from './app-version/app-version.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { ReadMoreComponent }    from './read-more/read-more.component';
import { RouterModule }         from '@angular/router';

@NgModule({
  declarations: [
    PipeTranslatePipe,
    AppVersionComponent,
    SocialIconsComponent,
    ReadMoreComponent
  ],
  exports: [
    PipeTranslatePipe,
    AppVersionComponent,
    SocialIconsComponent,
    ReadMoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UtilityModule { }
