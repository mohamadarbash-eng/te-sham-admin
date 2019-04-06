import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromAuth from './authenticate.reducer';

export interface UserState {
  Authenticate: fromAuth.AuthenticateState;
}

export const reducers: ActionReducerMap<UserState> = {
  Authenticate: fromAuth.AuthenticateReducer,
};

export const getUserState = createFeatureSelector<UserState>('authentication');
