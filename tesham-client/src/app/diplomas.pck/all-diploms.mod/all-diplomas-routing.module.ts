import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDiplomasComponent } from './components/all-diplomas.component';

const routes: Routes = [{
    path: '',
    component: AllDiplomasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllDiplomasRoutingModule { }
