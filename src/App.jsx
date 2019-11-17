import React, { Component } from 'react';
import { css, jsx } from '@emotion/core';
import axios from 'axios';

class App extends Component{
  async componentDidMount(){
    console.log('in mount')
    try {
      const res = await axios.get('http://localhost:8000/test/');
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div
            css={css`
            padding: 32px;
            background-color: blue;
            font-size: 24px;
            color: white;
          `}
      >
        <header>
          <p>
            Bridge Front End Application.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
