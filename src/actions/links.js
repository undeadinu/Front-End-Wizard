import {
  LINKS_FETCH,
  LINKS_FETCH_SUCCESS,
  LINKS_FETCH_ERROR
} from '../types';

const apiFullPath = 'https://raw.githubusercontent.com/kieranmv95/Front-End-Wizard/master/src/public/data.json';

export function getLinks() {
  return(dispatch) => {
    dispatch({ type: LINKS_FETCH });

    return fetch(apiFullPath)
      .then(res => {
        if(!res.ok) { throw Error }
        return res.json()
      })
      .then(data => {
        dispatch({ type: LINKS_FETCH_SUCCESS, data: data.data });
      })
      .catch(() => {
        dispatch({ type: LINKS_FETCH_ERROR });
        return Promise.reject();
      });
  }
}