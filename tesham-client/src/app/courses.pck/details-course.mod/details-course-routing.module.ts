import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsCourseComponent } from './components/details-course.component';
import { routes as _routes } from '../../routes-model';

const routes: Routes = [{
    path: '',
    component: DetailsCourseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCourseRoutingModule { }
