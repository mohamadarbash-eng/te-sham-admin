import { Action } from '@ngrx/store';


export enum ActionTypes {
  Init = '[ALL] Init',
}

export class InitBreadcrumb implements Action {
  readonly type = ActionTypes.Init;
  constructor(public payload: {data: any} = null) {}
}
