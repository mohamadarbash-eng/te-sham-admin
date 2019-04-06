import { Action } from '@ngrx/store';


export interface Action {
  type: string;
  payload?: any;
}


export const AuthenticateActionTypes = {
  AUTHENTICATE: type('[users] Authenticate'),
  AUTHENTICATE_ERROR: type('[users] Authentication error'),
  AUTHENTICATE_SUCCESS: type('[users] Authentication success'),
  AUTHENTICATED: type('[users] Authenticated'),
  AUTHENTICATED_ERROR: type('[users] Authenticated error'),
  AUTHENTICATED_SUCCESS: type('[users] Authenticated success'),
  SIGN_OUT: type('[users] Sign off'),
  SIGN_OUT_ERROR: type('[users] Sign off error'),
  SIGN_OUT_SUCCESS: type('[users] Sign off success'),
  SIGN_UP: type('[users] Sign up'),
  SIGN_UP_ERROR: type('[users] Sign up error'),
  SIGN_UP_SUCCESS: type('[users] Sign up success')
};


export class AuthenticateAction implements Action {
  public type: string = AuthenticateActionTypes.AUTHENTICATED;

  constructor(public payload: {user: {email: string}, authenticate: {loggedIn: boolean, token: string}}) {}
}

export type ActionsUnion = AuthenticateAction;


export function type<T>(label: T | ''): T {
  const typeCache: { [label: string]: boolean } = {};
  if (typeCache && typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}
