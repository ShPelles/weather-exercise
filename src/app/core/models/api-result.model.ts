export interface ApiResult<T>{
  value: T;
  loading: boolean;
  error?: boolean | string | Error;
}
