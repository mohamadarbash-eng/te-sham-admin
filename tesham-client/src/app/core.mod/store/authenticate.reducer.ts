import * as authenticationActions from './authenticate.action';
import { Action } from './authenticate.action';

export interface AuthenticateState extends Action {
  payload: {
    authenticate: AuthInterface,
    error?: string;
    user?: {
      [key: string]: string
    };
  };
}

export interface AuthInterface {
  loggedIn: boolean;
  token: string;

}

export const initialState: AuthenticateState = {
  payload: {
    authenticate: {loggedIn: false,
      token: null
    }
  },
  type: null
};

export function AuthenticateReducer(state = initialState, action: authenticationActions.ActionsUnion): AuthenticateState {
  switch (action.type) {
    case authenticationActions.AuthenticateActionTypes.AUTHENTICATED:
      return {...state, type: action.type, payload: action.payload};
    default :
      return state;
  }
}

