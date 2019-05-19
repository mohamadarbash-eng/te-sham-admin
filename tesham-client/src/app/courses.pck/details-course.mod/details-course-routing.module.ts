import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsCourseComponent } from './components/details-course.component';

const routes: Routes = [{
    path: '',
    component: DetailsCourseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCourseRoutingModule { }
