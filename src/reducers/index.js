import { combineReducers } from 'redux';

import meteorites from './meteoriteReducer';

const rootReducer = combineReducers({
  meteorites,
});

export default rootReducer;