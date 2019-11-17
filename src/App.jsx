import React, { Component } from 'react';
import { css, jsx } from '@emotion/core';

class App extends Component{
  render() {
    return (
      <div className="App" 
            css={css`
            padding: 32px;
            background-color: blue;
            font-size: 24px;
            color: white;
          `}
      >
        <header className="App-header">
          <p>
            Bridge Front End Application.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
