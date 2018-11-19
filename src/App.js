import React, { Component } from 'react';
import rootReducer from 'redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Main from './routes/Main';
import Header from './components/organismes/Header/Header';

export const myStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

// Redux
const ReduxApp = () => (
  <Provider store={myStore}>
    <App />
  </Provider>
);
export default ReduxApp;
