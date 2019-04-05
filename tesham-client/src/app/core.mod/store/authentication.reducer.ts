import * as authenticationActions from './authentication.action';

export interface AuthenticationState {
  token?: string;
}

export const initialState: AuthenticationState = {
  token: null
};

export function authenticationReducer(state = initialState, action: authenticationActions.ActionsUnion): AuthenticationState {
  switch (action.type) {
    case authenticationActions.ActionTypes.SetToken:
      return action.payload;
    case authenticationActions.ActionTypes.RemoveToken:
      return initialState;
    default :
        return initialState;
  }
}
