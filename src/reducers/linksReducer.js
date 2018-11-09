import {
  LINKS_FETCH,
  LINKS_FETCH_SUCCESS,
  LINKS_FETCH_ERROR
} from '../types';

const initialState = {
  data: null,
  loading: true,
  error: false
};

export default function linksReducer(state = initialState, action) {
  switch(action.type) {
    case LINKS_FETCH:
      return {
        ...state,
        loading: true,
        error: false
      };
    case LINKS_FETCH_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: false
      };
    case LINKS_FETCH_ERROR:
      return {
        data: null,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}