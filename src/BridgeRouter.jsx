import React, { Component, Fragment } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
} from "react-router-dom";
import { Global, css, jsx } from '@emotion/core';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Profile from './Profile.jsx';

import MeetingRouter from './meeting/MeetingRouter.jsx';


const globalCSS = css`
body{
  font: normal 18px/1.5 "Fira Sans", "Helvetica Neue", sans-serif;
  background: #3AAFAB;
  color: #fff;
}
`;

class BridgeRouter extends Component {
  constructor(props) {
      super(props);
      this.state = {
        token: null,
      }
    }
    componentDidMount(){
      this.setState({token: localStorage.getItem('token')})
    }

    setToken = token => {
      localStorage.setItem('token', token);
      this.setState({token})
    }
    render(){
        const { token } = this.state;
        const isLoggedIn = (token) ? true : false;
        return(
          <Fragment>
          {/* // <BrowserRouter> */}
              <Global styles={globalCSS} />
              <Navigation isLoggedIn={isLoggedIn} />

              <Route exact path="/" component={Home} />
              <Route path="/login" component={ () => <Login setToken={this.setToken} />} />
              <Route path="/register" component={Register} />
              <Route path="/profile" component={Profile} />
              <Route path="/meeting" component={MeetingRouter} />

        {/* // </BrowserRouter> */}
        </Fragment>
        )
    }
}

export default BridgeRouter;