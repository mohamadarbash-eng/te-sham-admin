// Angular
import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';
import { CourseCardComponent } from './course-card/components/course-card.component';
import { DiplomCardComponent } from './diplom-card/components/diplom-card.component';
import { UtilityModule } from '../utility.mod/utility.module';
import { UpcomingEventCardComponent } from './event-card/components/upcoming-event-card.component';
import { RouterModule } from '@angular/router';


// App


@NgModule({
  declarations: [
    UpcomingEventCardComponent,
    CourseCardComponent,
    DiplomCardComponent

  ],
  exports: [
    UpcomingEventCardComponent,
    CourseCardComponent,
    DiplomCardComponent

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
