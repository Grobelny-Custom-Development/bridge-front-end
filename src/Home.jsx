import React, { Component } from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";

class Home extends Component{
  render() {
    return (
      <div >
        <header>
          <p>
            Welcome to Bridge!
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
