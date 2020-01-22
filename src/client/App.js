import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { Global, css, jsx } from '@emotion/core';
import Navigation from './navigation/Navigation.jsx';


const globalCSS = css`
body{
  margin: 0px;
  font: normal 18px/1.5 "Fira Sans", "Helvetica Neue", sans-serif;
  background: #f4f4f4;
  h1{
    color: #d9d9d9
  }
}
`;

const pageCss = css`
display: flex;
min-height: 100vh;

`;


const routeCss = css`
width: 80%;
max-width: 1200px;
margin: 0 auto;
`;


const App = (props) => {
  const { route, match } = props;
  return (
    <div css={pageCss}>
      <Global styles={globalCSS} />
      <Navigation />
      <div css={routeCss}>
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
