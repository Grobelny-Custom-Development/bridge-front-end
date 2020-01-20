import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'cookies-js';

import serialize from 'serialize-javascript';
import rootReducer from './reducers';
import * as serviceWorker from '../serviceWorker';
import Routes from './Routes.js';


const persistConfig = {
  key: 'root',
  storage: new CookieStorage(Cookies, {}),
  // stateReconciler(inboundState, originalState) {
  //   console.log(inboundState);
  //   // Ignore state from cookies, only use preloadedState from window object
  //   return inboundState
  // }
};

const persistRootReducer = persistCombineReducers(persistConfig, rootReducer);

const store = createStore(persistRootReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store, {});

ReactDOM.hydrate(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
