import { Routes } from '@angular/router';
import { routes } from './routes-model';

export const appRoutes: Routes = [{
  path: '', redirectTo: routes.homepage, pathMatch: 'full'
}];
