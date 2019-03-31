import * as authenticationActions from './authentication.action';

export interface BreadcrumbPagesState {
  login: boolean;
}

export const initialState: BreadcrumbPagesState = {
  login: false
};

export function authenticationReducer(state = initialState, action: authenticationActions.ActionsUnion): BreadcrumbPagesState {
  switch (action.type) {
    case authenticationActions.ActionTypes.UserLoggedIn:
      return action.payload;
    default :
        return initialState;
  }
}
