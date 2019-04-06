import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as storeSelector from '../../store/user.selector';

import { AuthInterface } from '../../store/authenticate.reducer';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private isuserAuthenticated: boolean;

// TODO add authentication request, it should be the first request to send to backend, before the app can running up
  constructor(private store: Store<AuthInterface>) {
    this.store.select(storeSelector.getUserCredentials).subscribe(
      (value: AuthInterface) => {
        if (value) {
          this.isuserAuthenticated = value.loggedIn;
          this.token = value.token;
          console.log(value);
        }
      });
  }

  public get isUserAuthenticated(): boolean {
    return this.isuserAuthenticated;
  }

  public get getToken(): string {
    return this.token;
  }
}
