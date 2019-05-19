import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsDiplomaComponent } from './components/details-diploma.component';

const routes: Routes = [{
    path: '',
    component: DetailsDiplomaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsDiplomaRoutingModule { }
