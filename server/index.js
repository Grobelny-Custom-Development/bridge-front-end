import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';
import BridgeRouter from '../src/BridgeRouter.jsx';

const PORT = process.env.PORT || 3006;
const app = express();

const renderApp = (req,res) => {
  // const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <BridgeRouter />
    </StaticRouter>,
  );

  console.log(app)

  const indexFile = path.resolve('./src/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`),
    );
  });
}

app.use(express.static('./dist'));

app.get('*', (req, res) => {
renderApp(req, res);
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
