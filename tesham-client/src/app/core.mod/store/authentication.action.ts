import { Action } from '@ngrx/store';

export interface SetTokenInterface {
  token: string;
}

export enum ActionTypes {
  RemoveToken = '[Auth] UserLoggedIn',
  SetToken = '[Auth] SetToken'
}

export class SetToken implements Action {
  readonly type  = ActionTypes.SetToken;
  constructor(public payload: SetTokenInterface = null) {}
}
export class RemoveToken implements Action {
  readonly type = ActionTypes.RemoveToken;
}
export type ActionsUnion = RemoveToken  | SetToken;
