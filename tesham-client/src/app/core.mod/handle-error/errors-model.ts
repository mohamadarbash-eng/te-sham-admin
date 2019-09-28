export interface BackendErrorInterface {
  errorId: ERRORS_MODEL_MAP;
  errorMessage: string;
}

const enum ERRORS_MODEL_MAP  {
  'CUSTOMER_NOT_FOUND' = 'CUSTOMER_NOT_FOUND',
  'PASSWORD_IS_WRONG' = '',
  'UNKNOWN_ERROR' = ''
}
