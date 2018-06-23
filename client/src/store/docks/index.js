import { combineReducers, configureStore } from 'redux';

import sample from './reviews';
import rootSaga from '../sagas';

export default () => {
  const rootReducer = combineReducers({
    sample,
  });

  return configureStore(rootReducer, rootSaga);
};
