import { Routes }         from '@angular/router';
import { routes }         from './routes-model';
import { LoginComponent } from './core.mod/authentication/login/login.component';
import { SignupComponent } from './core.mod/authentication/signup/signup.component';
import { AuthGuards } from './core.mod/guards/auth-guards';
export const appRoutes: Routes = [
  {
  path: '', redirectTo: routes.homepage, pathMatch: 'full'
},
  {
    path: routes.login, component: LoginComponent
  },
  {
    path: routes.signUp, component: SignupComponent, canActivate: [AuthGuards]
  },
  {
    path: routes.courses,
    loadChildren: () => import('./courses.pck/all-courses.mod/all-courses.module').then(m => m.AllCoursesModule)
  },
  {
    path: routes.diplomas,
    loadChildren: () => import('./diplomas.pck/all-diploms.mod/all-diplomas.module').then(m => m.AllDiplomasModule)
  },
  {
    path: routes.courseDetail + '/:courseName',
    loadChildren: () => import('./courses.pck/details-course.mod/details-course.module').then(m => m.DetailsCourseModule)
  },
  {
    path: routes.diplomaDetail + '/:diplomaName',
    loadChildren: () => import('./diplomas.pck/details-diploma.mod/details-diploma.module').then(m => m.DetailsDiplomaModule)
  }
];
