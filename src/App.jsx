import React, { Component } from 'react';
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import {
  Link
} from "react-router-dom";

const appCss = css`
padding: 32px;
background-color: blue;
font-size: 24px;
color: white;
`;
class App extends Component{
  render() {
    return (
      <div >
        <header css={appCss}>
          <p>
            bridge Front End Application.
          </p>
        </header>
        <Link to="/meeting/create" > Create Meeting </Link>
      </div>
    );
  }
}

export default App;
