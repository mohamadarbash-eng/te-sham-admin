// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilityModule } from '../utility.mod/utility.module';
import { RouterModule } from '@angular/router';
import { TabNavigationComponent } from './tab-navigation/tab-navigation.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';


// App


@NgModule({
  declarations: [
    TabNavigationComponent,
    ImageCarouselComponent,
    VideoCarouselComponent

  ],
  exports: [
    TabNavigationComponent,
    ImageCarouselComponent,
    VideoCarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule,
    RouterModule

  ],
  providers: []
})
export class FrameModule {
}
