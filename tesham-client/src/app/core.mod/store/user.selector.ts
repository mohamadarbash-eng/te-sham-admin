import * as fromAuth from './authenticate.reducer';
import * as User from './index-store';
import { createSelector } from '@ngrx/store';

export const getAuthenticate = createSelector(
  User.getUserState,
  (state: User.UserState) => state.Authenticate
);

export const isAuthenticated = createSelector(
  getAuthenticate,
  (state: fromAuth.AuthenticateState) => state.payload.authenticate.loggedIn
);

export const getUserCredentials = createSelector(
  getAuthenticate,
  (state: fromAuth.AuthenticateState) => state.payload.authenticate
);
