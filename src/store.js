import {createStore, applyMiddleware } from 'redux';

// dev tools
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import mainRootReducer from './reducers/root-reducer'

import ReduxPromise from 'redux-promise';


// sagas middleware
// import createSagaMiddleware from 'redux-saga';
// const sagaMiddleware = createSagaMiddleware();

var store;

export const composeReduxStore = (featureName) => {
  var rootReducer;
  var initialSaga;

  switch (featureName) {

    case "main":
      initialSaga = require('./mainSaga').initialize;
      rootReducer = mainRootReducer;
      break;
    default:
      // console.log('unreachable default');
      break;
  }

  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxPromise)));
//  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, ReduxPromise)));
  //sagaMiddleware.run(initialSaga);
  return store;
};

// this function allows the store to be accessble outside of components
// for example, getting the timeZone within the time-helper functions
// if a store hasn't been composed by a feature, create a minimal test store
export const getStore = () => {
  if (store) {
    return store;
  } else {
    return createStore(require('../test/test-root-reducer'));
  }
};
