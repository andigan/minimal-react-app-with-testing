// This root reducer will be used by ./store.js getStore()
// It is meant to mimic a redux store with default values if a store wasn't composed by a feature
import { combineReducers } from 'redux';

import configReducer from './test-config-reducer';

module.exports = combineReducers({
  config: configReducer
});
