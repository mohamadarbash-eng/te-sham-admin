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
    loadChildren: './courses.pck/all-courses.mod/all-courses.module#AllCoursesModule'
  }];
