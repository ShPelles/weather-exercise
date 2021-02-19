export type ApiResult<T> = ApiResultLoading | ApiResultSuccess<T> | ApiResultFailed;

interface ApiResultLoading {
  loading: true;
}

interface ApiResultSuccess<T> {
  loading: false;
  value: T;
}

interface ApiResultFailed {
  loading: false;
  error?: boolean | string | Error;
}
