import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsDiplomaComponent } from './components/details-diploma.component';
import { routes as _routes } from '../../routes-model';

const routes: Routes = [{
    path: '',
    component: DetailsDiplomaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsDiplomaRoutingModule { }
