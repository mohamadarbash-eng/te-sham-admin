import { Action } from '@ngrx/store';


export interface UserLoginInterface {
  login: boolean;
}

export enum ActionTypes {
  UserLoggedIn = '[Auth] UserLoggedIn',
  SetToken = '[Auth] SetToken'
}

export class UserLoggedIn implements Action {
  readonly type  = ActionTypes.UserLoggedIn;
  constructor(public payload: UserLoginInterface = null) {}
}


export class SetToken implements Action {
  readonly type  = ActionTypes.SetToken;
  constructor(public payload: {token: string } = null) {}
}

export type ActionsUnion = UserLoggedIn  | SetToken;
