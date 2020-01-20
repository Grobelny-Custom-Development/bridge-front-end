import React from 'react';
import express from 'express';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import { persistStore, getStoredState, persistCombineReducers } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { CookieStorage, NodeCookiesWrapper } from 'redux-persist-cookie-storage';
import Cookies from 'cookies';

import Routes from '../client/Routes.js';
import rootReducer from '../client/reducers';

const configurePersistor = async (store) => new Promise((resolve) => {
  const persistor = persistStore(store, {}, () => {
    resolve(persistor);
  });
});

// import path from 'path';
// import fs from 'fs';
//   const indexFile = path.resolve('./src/index.html');
//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('Oops, better luck next time!');
//     }

//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">${content}</div>
//       `),
//     );
//   });
// });


// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

const PORT = process.env.PORT || 3006;
const app = express();


app.use(express.static('public'));
app.use(Cookies.express());
app.use(async (req, res, next) => {
  const cookieJar = new NodeCookiesWrapper(new Cookies(req, res));

  const persistConfig = {
    key: 'root',
    storage: new CookieStorage(cookieJar),
    stateReconciler(inboundState, originalState) {
      // Ignore state from cookies, only use preloadedState from window object
      return originalState;
    },
  };

  let preloadedState;
  try {
    preloadedState = await getStoredState(persistConfig);
  } catch (e) {
    // getStoredState implementation fails when index storage item is not set.
    preloadedState = {};
  }
  const persistRootReducer = persistCombineReducers(persistConfig, rootReducer);
  req.reduxStore = createStore(persistRootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
  res.removeHeader('Set-Cookie');
  // const persistor = await configurePersistor(store)

  // // Force cookies to be set
  // await persistor.flush()

  // res.send(200, 'Done!')
  next();
},
express.static('public'));

app.get('*', (req, res) => {
  // Checks the given path, matches with component and returns array of items about to be rendered
  const routes = matchRoutes(Routes, req.path);


  // const store = req.reduxStore;
  // const persistor = persistStore(store, {});


  // Execute all loadData functions inside given urls and wrap promises with new promises to be able to render pages all the time
  // Even if we get an error while loading data, we will still attempt to render page.
  const promises = routes
    .map(({ route }) => (route.loadData ? route.loadData(store, id) : null))
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
      return null;
    });

  // Wait for all the loadData functions, if they are resolved, send the rendered html to browser.
  Promise.all(promises).then(() => {
    const context = {};
    const content = ReactDOMServer.renderToString(
    // <PersistGate persistor={persistor} >
      <Provider store={req.reduxStore}>
        <StaticRouter location={req.path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
      // </PersistGate>
      ,
    );

    return res.send(`<!DOCTYPE html>
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body>
      <div id="root">${content}</div>
      <script src="/bundle.js"></script>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </body>
</html>`);
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
