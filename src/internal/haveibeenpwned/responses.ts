/**
 * Known potential responses from the remote API.
 *
 * Unfortunately, the API does not send a decent human-readable message back
 * with each response, but they are documented on the website:
 * https://haveibeenpwned.com/api/v2#ResponseCodes
 *
 * These objects simply provide a mapping between the HTTP response status code
 * and the corresponding human-readable message so we can throw a more
 * descriptive error for the consumer. (They are also leveraged in our tests.)
 */

export interface HaveIBeenPwnedApiResponse {
  headers: { 'cf-ray'?: string };
  status: number;
  statusText?: string;
  data?: string;
}

/** @internal */
export const OK: HaveIBeenPwnedApiResponse = {
  headers: {},
  status: 200,
};

/** @internal */
export const BAD_REQUEST: HaveIBeenPwnedApiResponse = {
  headers: {},
  status: 400,
  statusText:
    'Bad request — the account does not comply with an acceptable format.',
};

/** @internal */
export const FORBIDDEN: HaveIBeenPwnedApiResponse = {
  headers: {},
  status: 403,
  statusText: 'Forbidden - access denied.',
};

/** @internal */
export const BLOCKED: HaveIBeenPwnedApiResponse = {
  headers: { 'cf-ray': 'someRayId' },
  status: 403,
};

/** @internal */
export const NOT_FOUND: HaveIBeenPwnedApiResponse = {
  headers: {},
  status: 404,
};

/**
 * This response has unique behavior. For some reason, the API includes a
 * human-readable message in the response body for this one. Manually populating
 * the message here purely for use in tests.
 *
 * @internal
 */
export const TOO_MANY_REQUESTS: HaveIBeenPwnedApiResponse = {
  headers: {},
  status: 429,
  data:
    'Rate limit exceeded, refer to acceptable use of the API: ' +
    'https://haveibeenpwned.com/API/v2#AcceptableUse',
};
