import axios from 'axios';
import { 
    FETCH_METEORITES,
    FETCH_METEORITES_SUCCESS,
    FETCH_METEORITES_ERROR,
    SEARCH_RESULTS
} from "./actionTypes";

const hostUrl = 'https://data.nasa.gov/resource/gh4g-9sfh.json';

const fetchMeteorites = () => ({ type: FETCH_METEORITES })
const fetchMeteoritesSuccess = data => ({ type: FETCH_METEORITES_SUCCESS, data });
const search = data => ({ type: SEARCH_RESULTS, data });
const fetchMeteoritesError = () => ({ type: FETCH_METEORITES_ERROR })

export const fetchAllMeteorites = () => async (dispatch) => {
  dispatch(fetchMeteorites()); 
  try {
    const response = await axios.get(`${hostUrl}`);
    const { data } = response;
    dispatch(fetchMeteoritesSuccess(data));
  } catch (e) {
    dispatch(fetchMeteoritesError())
    throw (e);
  }
};

export const searchMeteorites = keyword => async (dispatch) => {
  dispatch(fetchMeteorites()); 
  try {
    const response = await axios.get(`${hostUrl}?$where=lower(name)%20like%20(lower(%22%25${keyword}%25%22))&$order=name`)
    const { data } = response;
    dispatch(search(data))
  } catch (e) {
    dispatch(fetchMeteoritesError())
    throw(e);
  }
}