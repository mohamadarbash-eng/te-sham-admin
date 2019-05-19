// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
// App
import { TranslatePipe } from '../core.mod/translate/pipe/translate.pipe';
import { AppVersionComponent } from './app-version/app-version.component';
import { SocialIconsComponent } from './social-icons/components/social-icons.component';
import { ReadMoreComponent } from './read-more/components/read-more.component';
import { BreadcrumbPagesComponent } from './breadcrumb-pages/components/breadcrumb-pages.component';
import { breadcrumbReducer } from './breadcrumb-pages/store/breadcrumb-pages.reducer';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LangSwitcherComponent } from './lang-switcher/lang-switcher.component';

@NgModule({
  declarations: [
    TranslatePipe,
    AppVersionComponent,
    SocialIconsComponent,
    ReadMoreComponent,
    BreadcrumbPagesComponent,
    PageHeaderComponent,
    LangSwitcherComponent
  ],
  exports: [
    TranslatePipe,
    AppVersionComponent,
    SocialIconsComponent,
    ReadMoreComponent,
    BreadcrumbPagesComponent,
    PageHeaderComponent,
    LangSwitcherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    StoreModule.forFeature('breadcrumb', breadcrumbReducer)
  ]
})
export class UtilityModule {
}
