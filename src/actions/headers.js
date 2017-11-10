import Cookies          from 'js-cookie';
import { getSettings }  from 'models/settings';

export const UPDATE_HEADERS = 'UPDATE_HEADERS';

export function updateHeaders(headers = {}) {
  return (dispatch, getState) => {
    const { cookieOptions } = getSettings(getState());

    if (Object.keys(headers).length === 0 ||
      (headers['access-token'] != null && headers['access-token'] !== '')) {
      Cookies.set(cookieOptions.key, JSON.stringify(headers), {
        expires: cookieOptions.expires,
        path: cookieOptions.path
      });
    }

    return dispatch({ type: UPDATE_HEADERS, headers });
  };
}
