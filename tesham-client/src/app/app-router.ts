import { Routes }         from '@angular/router';
import { routes }         from './routes-model';
import { IndexComponent } from './main.mod/index/components/index.component';

export const appRoutes: Routes = [
  {
    path: routes.homepage,
    component: IndexComponent
  },
  {
  path: '', redirectTo: routes.homepage, pathMatch: 'full'
},
  {
    path: routes.courses,
    loadChildren: './courses.pck/all-courses.mod/all-courses.module#AllCoursesModule'
  }];
