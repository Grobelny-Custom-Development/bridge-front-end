import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Global, css, jsx } from '@emotion/core';
import Navigation from './navigation/Navigation.jsx';


const globalCSS = css`
body{
  font: normal 18px/1.5 "Fira Sans", "Helvetica Neue", sans-serif;
  background: #f4f4f4;
  color: #0e8afc;
`;


const pageCss =  css`
width: 80%;
max-width: 1200px;
margin: 0 auto;
`;


const App = ({ route }) => {
  return (
    <div>
      <Global styles={globalCSS} />
      <Navigation />
      <div css={pageCss}>
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
};

export default App;