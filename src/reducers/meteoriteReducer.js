import initialState from './initialState';
import  { FETCH_METEORITES_SUCCESS, SEARCH_RESULTS, FETCH_METEORITES, FETCH_METEORITES_ERROR } from '../actions/actionTypes';


export default (state=initialState, action) => {
  switch(action.type) {
    case FETCH_METEORITES: 
      return { ...state, loading: true };
    case FETCH_METEORITES_ERROR:
      return { ...state, loading: false };
    case FETCH_METEORITES_SUCCESS:
      return {
        ...state,
        meteorites: action.data,
        loading: false
      };
    case SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.data,
        loading: false
      }
    default:
      return state
  }
}