// core react
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider }  from 'react-redux';

import ReduxPromise from 'redux-promise';

// router
import { Router, Route } from 'react-router-dom';
import history from './history';

// reducers
import rootReducer from './reducers/root-reducer'

// components
import PageContainer from './components/main-view/page-container';
import OtherContainer from './components/other-view/other-container';

// redux store
import { composeReduxStore } from './store';

var store = composeReduxStore("main");

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={PageContainer}/>
        <Route path="/other" component={OtherContainer}/>
      </div>
     </Router>
  </Provider>, document.getElementById('app')
);
