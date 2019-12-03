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
class Home extends Component{
  render() {
    return (
      <div >
        <header css={appCss}>
          <p>
            Home Page
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
