/**
 * When dealing with function results, it is often very convenient to have a way to express success and failure.
 * This type helps expressing success and failure.
 *
 * Example:
 *
 * ``` ts
 * const result: Result<number> = {
 *  success: true,
 *  data: 123,
 * }
 * ```
 *
 * If the Generic is (potentially) `undefined`, the `data` field may be left out:
 *
 * ``` ts
 * const result: Result<number | undefined> = {
 *  success: true,
 * }
 * ```
 *
 * A type for the error case can be defined using the second Generic:
 *
 * ``` ts
 * const result: Result<number, string> = {
 *  success: false,
 *  error: 'my-error',
 * }
 * ```
 */
export type Result<TSuccess = undefined, TError = undefined> =
  | SuccessResult<TSuccess>
  | ErrorResult<TError>;

export type SuccessResult<T = undefined> = T extends undefined
  ? SuccessResultWithOptionalData<T>
  : SuccessResultWithData<T>;

export interface SuccessResultWithOptionalData<T> {
  success: true;
  data?: T;
}
export interface SuccessResultWithData<T> {
  success: true;
  data: T;
}

export type ErrorResult<T = undefined> = T extends undefined
  ? ErrorResultWithOptionalData<T>
  : ErrorResultWithData<T>;

export interface ErrorResultWithOptionalData<T> {
  success: false;
  error?: T;
}
export interface ErrorResultWithData<T> {
  success: false;
  error: T;
}
