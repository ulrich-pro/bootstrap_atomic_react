import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'redux/reducers';
import Main from './routes/Main';
import Header from './patterns/organisms/Header/Header';

export const myStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// Redux
const ReduxApp = () => (
  <Provider store={myStore}>
    <div className="App">
      <Header />
      <Main />
    </div>
  </Provider>
);
export default ReduxApp;
