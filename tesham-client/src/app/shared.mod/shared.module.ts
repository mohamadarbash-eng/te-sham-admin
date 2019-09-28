// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// App
import { CourseCardComponent } from './course-card/components/course-card.component';
import { DiplomaCardComponent } from './diplom-card/components/diploma-card.component';
import { UtilityModule } from '../utility.mod/utility.module';
import { UpcomingEventCardComponent } from './event-card/components/upcoming-event-card.component';

@NgModule({
  declarations: [
    UpcomingEventCardComponent,
    CourseCardComponent,
    DiplomaCardComponent

  ],
  exports: [
    UpcomingEventCardComponent,
    CourseCardComponent,
    DiplomaCardComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule,
    RouterModule

  ],
  providers: []
})
export class SharedModule { }
