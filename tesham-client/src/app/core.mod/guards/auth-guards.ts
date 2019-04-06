import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../proxy/services/auth.service';
import { routes } from '../../routes-model';

@Injectable()
export class AuthGuards implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAuth = this.authService.isUserAuthenticated;
    if (!isAuth) {
      this.router.navigate([`/${routes.login}`]);
    }
    return isAuth;
  }
}
