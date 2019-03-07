import { Routes }         from '@angular/router';
import { routes }         from './routes-model';
export const appRoutes: Routes = [
  {
  path: '', redirectTo: routes.homepage, pathMatch: 'full'
},
  {
    path: routes.courses,
    loadChildren: './courses.pck/all-courses.mod/all-courses.module#AllCoursesModule'
  }];
