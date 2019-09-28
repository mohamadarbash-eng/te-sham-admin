import * as breadcrumbAction from './breadcrumb-pages.action';

export interface BreadcrumbPagesState {
  data: any;
}

export const initialState: BreadcrumbPagesState = {
  data: null
};

export function breadcrumbReducer(state = initialState, action: breadcrumbAction.InitBreadcrumb): BreadcrumbPagesState {
  switch (action.type) {
    case breadcrumbAction.ActionTypes.Init:
      return action.payload;
    default :
        return state;
  }
}
