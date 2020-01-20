import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { Global, css, jsx } from '@emotion/core';
import Navigation from './navigation/Navigation.jsx';


const globalCSS = css`
body{
  font: normal 18px/1.5 "Fira Sans", "Helvetica Neue", sans-serif;
  background: #f4f4f4;
  color: #0e8afc;
`;


const pageCss = css`
width: 80%;
max-width: 1200px;
margin: 0 auto;
`;


const App = (props) => {
  const { route, match } = props;
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

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  route: null,
};


export default App;
